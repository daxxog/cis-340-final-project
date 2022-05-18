using System.ComponentModel.DataAnnotations;

using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Models
{
    public class GetInvoice
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public string Body { get; set; }

        [Required]
        public long TimeStamp { get; set; }

        public GetInvoice(Invoice invoice)
        {
            Id = invoice.Id;
            Body = invoice.Body;
            TimeStamp = invoice.TimeStamp;
        }
    }
}
