using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using ShopEasyAPI.Models;
using ShopEasyAPI.Helpers;
using ShopEasyAPI.Data;
using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Controllers {
    [ApiController]
    [AuthorizeUser]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase {
        private readonly ShopEasyContext _context;

        public ShopController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/Shop/Products
        [HttpGet("Products")]
        public async Task<ActionResult<IEnumerable<GetProduct>>> GetProducts()
        {
            ActionResult<IEnumerable<Product>> products = await _context.Products.ToListAsync();
            List<GetProduct> getProducts = new List<GetProduct>();

            foreach (Product product in products.Value) {
                getProducts.Add(new GetProduct(product));
            }

            return getProducts;
        }

        // GET: api/Shop/ProductTypes
        [HttpGet("ProductTypes")]
        public async Task<ActionResult<IEnumerable<GetProductType>>> GetProductTypes()
        {
            ActionResult<IEnumerable<ProductType>> productTypes = await _context.ProductTypes.ToListAsync();
            List<GetProductType> getProductTypes = new List<GetProductType>();

            foreach (ProductType productType in productTypes.Value) {
                getProductTypes.Add(new GetProductType(productType));
            }

            return getProductTypes;
        }

        // GET: api/Shop/ClothingCategories
        [HttpGet("ClothingCategories")]
        public async Task<ActionResult<IEnumerable<GetClothingCategory>>> GetClothingCategories()
        {
            ActionResult<IEnumerable<ClothingCategory>> clothingCategories = await _context.ClothingCategories.ToListAsync();
            List<GetClothingCategory> getClothingCategories = new List<GetClothingCategory>();

            foreach (ClothingCategory clothingCategory in clothingCategories.Value) {
                getClothingCategories.Add(new GetClothingCategory(clothingCategory));
            }

            return getClothingCategories;
        }

        // POST: api/Shop/PlaceOrder
        [HttpPost("PlaceOrder")]
        public async Task<ActionResult<string>> PlaceOrder(NewOrder order)
        {
            UserLogin userLogin = (UserLogin)HttpContext.Items["UserLogin"];
            List<Product> products = new List<Product>();

            foreach (long productID in order.ProductIDs) {
                var product = await _context.Products.FindAsync(productID);

                if (product == null)
                {
                    return NotFound();
                }

                products.Add(product);
            }

            var customer = await _context.Customers.FindAsync(userLogin.CustomerId);

            if (customer == null)
            {
                 return NotFound();
            }

            var responsibleParty = await _context.ResponsibleParties.FindAsync(customer.ResponsiblePartyId);

            if (responsibleParty == null)
            {
                return NotFound();
            }

            var customerType = await _context.CustomerTypes.FindAsync(customer.CustomerTypeId);

            if (customerType == null)
            {
                return NotFound();
            }

            var salesTaxSetting = await _context.AdminSiteSettings.FindAsync("sales_tax");

            if (salesTaxSetting == null)
            {
                return NotFound();
            }

            InvoiceGenerator invoiceGenerator = new InvoiceGenerator(
                customer,
                responsibleParty,
                customerType,
                salesTaxSetting,
                products
            );

            // save the generated Invoice
            Invoice invoice = await invoiceGenerator.generateInvoice(_context);

            // return the generated Invoice
            return invoice.Body;
        }

        // GET api/Shop/Invoices
        [HttpGet("Invoices")]
        public async Task<ActionResult<List<GetInvoice>>> GetInvoices()
        {
            UserLogin userLogin = (UserLogin)HttpContext.Items["UserLogin"];
            Customer customer = await _context.Customers.FindAsync(userLogin.CustomerId);

            if (customer == null)
            {
                 return NotFound();
            }

            List<GetInvoice> invoices = new List<GetInvoice>();
            IDictionary<long, bool> AddedInvoice = new Dictionary<long, bool>(); // K=Invoice ID, V=true

            // find customer activities for a specific customer
            ActionResult<IEnumerable<CustomerActivity>> customerActivities = await _context.CustomerActivities.Where(
                customerActivity => customerActivity.CustomerId == customer.Id
            ).ToListAsync();

            foreach (CustomerActivity customerActivity in customerActivities.Value) {
                // de-duplication and append the Invoice to our List to return
                if(!AddedInvoice.ContainsKey(customerActivity.InvoiceId)) {
                    AddedInvoice[customerActivity.InvoiceId] =  true;
                    invoices.Add(new GetInvoice(await _context.Invoices.FindAsync(customerActivity.InvoiceId)));
                }
            }

            return invoices;
        }

        // GET api/Shop/Invoices/{start}/{end}
        [HttpGet("Invoices/{startTimestamp}/{endTimestamp}")]
        public async Task<ActionResult<List<GetInvoice>>> GetInvoices(long startTimestamp, long endTimestamp)
        {
            UserLogin userLogin = (UserLogin)HttpContext.Items["UserLogin"];
            Customer customer = await _context.Customers.FindAsync(userLogin.CustomerId);

            if (customer == null)
            {
                 return NotFound();
            }

            List<GetInvoice> invoices = new List<GetInvoice>();
            IDictionary<long, bool> AddedInvoice = new Dictionary<long, bool>(); // K=Invoice ID, V=true

            // find customer activities for a specific customer and time range
            ActionResult<IEnumerable<CustomerActivity>> customerActivities = await _context.CustomerActivities.Where(
                customerActivity =>
                customerActivity.CustomerId == customer.Id
                && customerActivity.Invoice.TimeStamp >= startTimestamp
                && customerActivity.Invoice.TimeStamp <= endTimestamp
            ).ToListAsync();

            foreach (CustomerActivity customerActivity in customerActivities.Value) {
                // de-duplication and append the Invoice to our List to return
                if(!AddedInvoice.ContainsKey(customerActivity.InvoiceId)) {
                    AddedInvoice[customerActivity.InvoiceId] =  true;
                    invoices.Add(new GetInvoice(await _context.Invoices.FindAsync(customerActivity.InvoiceId)));
                }
            }

            return invoices;
        }
    }
}
