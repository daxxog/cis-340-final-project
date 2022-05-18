using System.ComponentModel.DataAnnotations;

using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Models
{
    public class GetProductType
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        public GetProductType(ProductType productType)
        {
            Id = productType.Id;
            Name = productType.Name;
        }
    }
}
