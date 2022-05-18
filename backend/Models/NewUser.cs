using System.ComponentModel.DataAnnotations;


namespace ShopEasyAPI.Models
{
    public class NewUser
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public long? CustomerId { get; set; }

        [Required]
        public bool IsAdmin { get; set; }
    }
}
