using System.ComponentModel.DataAnnotations;


namespace ShopEasyAPI.Models
{
    public class UpdateUser
    {
        [Required]
        public string Username { get; set; }

        #nullable enable
        public string? Password { get; set; }
        #nullable disable

        public long? CustomerId { get; set; }

        public bool? IsAdmin { get; set; }
    }
}
