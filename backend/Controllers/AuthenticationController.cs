using Microsoft.AspNetCore.Mvc;

using ShopEasyAPI.Models;
using ShopEasyAPI.Services;
using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase {
        private IUserLoginService _userLoginService;

        public AuthenticationController(IUserLoginService userLoginService) {
            _userLoginService = userLoginService;
        }

        [HttpPost("authenticate")]
        public ActionResult<AuthenticateResponse> Authenticate(AuthenticateRequest authenticateRequest)
        {
            var response = _userLoginService.Authenticate(authenticateRequest);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [Authorize]
        [HttpGet("authenticate")]
        public IActionResult GetUsername()
        {
            UserLogin userLogin = (UserLogin)HttpContext.Items["UserLogin"];
            return Ok(userLogin.Username);
        }
    }
}
