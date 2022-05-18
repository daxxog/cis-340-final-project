using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using ShopEasyAPI.Models;
using ShopEasyAPI.Data;
using ShopEasyAPI.Data.Entities;

namespace ShopEasyAPI.Helpers {
    public class InvoiceGenerator {
        public List<Product> Products { get; set; }
        public Customer Customer { get; set; }
        public ResponsibleParty ResponsibleParty { get; set; }
        public CustomerType CustomerType { get; set; }
        public AdminSiteSetting SalesTaxSetting { get; set; }
        public IDictionary<long, int> NumberOfProductsPurchased { get; set; } // K=Product ID, V=Number of Products

        public InvoiceGenerator(
            Customer customer,
            ResponsibleParty responsibleParty,
            CustomerType customerType,
            AdminSiteSetting salesTaxSetting,
            List<Product> products
        ) {
            Customer = customer;
            ResponsibleParty = responsibleParty;
            CustomerType = customerType;
            SalesTaxSetting = salesTaxSetting;
            Products = products;
        }

        private int calculateTax(int totalCents) {
            var tax = Decimal.Parse(SalesTaxSetting.Value.Replace("%",""));
            return (int)Math.Floor(((decimal)totalCents) * (tax/(decimal)100));
        }

        private int calculateDiscount(int totalCents, int discountPercent) {
            return (int)Math.Floor(((decimal)totalCents) * ((decimal)discountPercent/(decimal)100));
        }

        private string invoiceBody(long timeStamp) {
            NumberOfProductsPurchased = new Dictionary<long, int>();

            // discount logic
            int discountPercent = (int)CustomerType.DiscountPercentage;
            bool hasFullDiscount = (CustomerType.DiscountProductTypeId == null) && (discountPercent > 0);
            bool salesTaxApplies = CustomerType.ApplySalesTax == 1;
            bool discountSpecificProduct = !hasFullDiscount;

            int padding = 40;
            string invoiceTxt = "";


            invoiceTxt += $"Invoice for {ResponsibleParty.Name}, generated on {unixTimeStampToDateTime(timeStamp)}\n";
            invoiceTxt += "Product Name".PadRight(padding) + "Product Price".PadLeft(padding) + "\n";

            int totalCents = 0;
            foreach (Product product in Products) {
                if(!NumberOfProductsPurchased.ContainsKey(product.Id)) {
                    NumberOfProductsPurchased[product.Id] = 0;
                }
                NumberOfProductsPurchased[product.Id] += 1;

                int priceCents = (int)product.PriceCents;
                bool applySpecficProductDiscount = discountSpecificProduct && CustomerType.DiscountProductTypeId == product.ProductTypeId;

                if(applySpecficProductDiscount) {
                    priceCents = (int)Math.Floor(priceCents - (priceCents * ((decimal)discountPercent / (decimal)100)));
                }

                // add the value to the total
                totalCents += priceCents;

                // add a line to the generated invoice
                if(applySpecficProductDiscount) {
                    invoiceTxt += $"{product.Name.PadRight(padding)}{("(" + discountPercent + "% discount) " + string.Format("${0:0.00}", ((decimal)priceCents/(decimal)100))).PadLeft(padding)}\n";
                } else {
                    invoiceTxt += $"{product.Name.PadRight(padding)}{string.Format("${0:0.00}", ((decimal)priceCents/(decimal)100)).PadLeft(padding)}\n";
                }
            }

            if(salesTaxApplies) {
                invoiceTxt += $"\n{"Total (before tax)".PadRight(padding)}{string.Format("${0:0.00}", (decimal)totalCents/(decimal)100).PadLeft(padding)}\n";
                var tax = calculateTax(totalCents);
                invoiceTxt += $"{("Tax (" + SalesTaxSetting.Value + ")").PadRight(padding)}{string.Format("${0:0.00}", (decimal)tax/(decimal)100).PadLeft(padding)}\n";
                totalCents += tax;
            }

            if(hasFullDiscount) {
                invoiceTxt += $"\n{"Total (before discount)".PadRight(padding)}{string.Format("${0:0.00}", (decimal)totalCents/(decimal)100).PadLeft(padding)}\n";
                var discount = calculateDiscount(totalCents, discountPercent);
                invoiceTxt += $"{("Discount (%" + CustomerType.DiscountPercentage + " " + CustomerType.Name + ")").PadRight(padding)}{string.Format("${0:0.00}", (decimal)discount/(decimal)100).PadLeft(padding)}\n";
                totalCents -= discount;
            }

            invoiceTxt += $"\n{"Total".PadRight(padding)}{string.Format("${0:0.00}", (decimal)totalCents/(decimal)100).PadLeft(padding)}\n";

            return invoiceTxt;
        }

        private long unixTimeNow() {
            var timeSpan = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0));
            return (long)timeSpan.TotalSeconds;
        }

        public static DateTime unixTimeStampToDateTime( long unixTimeStamp )
        {
            // Unix timestamp is seconds past epoch
            DateTime dateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTime = dateTime.AddSeconds( unixTimeStamp ).ToLocalTime();
            return dateTime;
        }

        public async Task<Invoice> generateInvoice(ShopEasyContext _context) {
            long ts = unixTimeNow();
            Invoice invoice = new Invoice{
                Body = invoiceBody(ts),
                TimeStamp = ts
            };

            // save the invoice
            _context.Invoices.Add(invoice);

            // save the customer activity
            foreach(KeyValuePair<long, int> entry in NumberOfProductsPurchased) {
                CustomerActivity customerActivity = new CustomerActivity{
                    InvoiceId = invoice.Id,
                    Invoice = invoice,
                    CustomerId = Customer.Id,
                    ProductId = entry.Key,
                    HowMany = (long)entry.Value
                };

                _context.CustomerActivities.Add(customerActivity);
            }

            // commit the changes to the database
            await _context.SaveChangesAsync();

            return invoice;
        }
    }
}
