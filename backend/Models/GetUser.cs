using System.ComponentModel.DataAnnotations;

using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Models
{
    public class GetUser
    {
        [Required]
        public string Username { get; set; }

        public long? CustomerId { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        public GetUser(UserLogin userLogin)
        {
            Username = userLogin.Username;
            IsAdmin = userLogin.IsAdmin == 1;
            CustomerId = userLogin.CustomerId;
        }
    }
}
