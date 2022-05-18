using System;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Options;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

using ShopEasyAPI.Data;
using ShopEasyAPI.Models;
using ShopEasyAPI.Helpers;
using ShopEasyAPI.Data.Entities;

namespace ShopEasyAPI.Services {
    public interface IUserLoginService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        UserLogin GetByUsername(string username);
    }

    public class UserLoginService : IUserLoginService
    {
        private readonly AppSettings _appSettings;
        private readonly ShopEasyContext _context;

        public UserLoginService(IOptions<AppSettings> appSettings, ShopEasyContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public UserLogin GetByUsername(string username) {
            return _context.UserLogins.Find(username);
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest request)
        {
            UserLogin userLogin = GetByUsername(request.Username);

            // return null if user not found
            // could be a timing attack here to determine if
            // a username exists
            if (userLogin == null) return null;

            // validate password against hashed password in the database
            if (!Crypto.ValidatePassword(request.Password, userLogin.PasswordHashed)) return null;

            // authentication successful so generate jwt token
            var token = generateJwtToken(userLogin);

            return new AuthenticateResponse(userLogin, token);
        }

        private string generateJwtToken(UserLogin userLogin)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_appSettings.JWTSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("username", userLogin.Username) }),
                Expires = DateTime.UtcNow.AddDays(_appSettings.JWTValidDays),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
