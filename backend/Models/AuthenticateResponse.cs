using ShopEasyAPI.Data.Entities;

namespace ShopEasyAPI.Models
{
    public class AuthenticateResponse
    {
        public string Username { get; set; }
        public bool IsAdmin { get; set; }
        public long? CustomerId { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(UserLogin userLogin, string token)
        {
            Username = userLogin.Username;
            IsAdmin = userLogin.IsAdmin == 1;
            CustomerId = userLogin.CustomerId;
            Token = token;
        }
    }
}
