using System.ComponentModel.DataAnnotations;

using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Models
{
    public class GetProduct
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public long PriceCents { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public long? ClothingCategoryId { get; set; }

        [Required]
        public long ProductTypeId { get; set; }

        public GetProduct(Product product)
        {
            Id = product.Id;
            PriceCents = product.PriceCents;
            Name = product.Name;
            Description = product.Description;
            ClothingCategoryId = product.ClothingCategoryId;
            ProductTypeId = product.ProductTypeId;
        }
    }
}
