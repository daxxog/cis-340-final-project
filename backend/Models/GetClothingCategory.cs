using System.ComponentModel.DataAnnotations;

using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Models
{
    public class GetClothingCategory
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        public GetClothingCategory(ClothingCategory clothingCategory)
        {
            Id = clothingCategory.Id;
            Name = clothingCategory.Name;
        }
    }
}
