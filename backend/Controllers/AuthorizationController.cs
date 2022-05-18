using Microsoft.AspNetCore.Mvc;

using ShopEasyAPI.Models;
using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase {
        public AuthorizationController() {
        }

        [AuthorizeAdmin]
        [HttpGet("admin")]
        public IActionResult IAmRoot()
        {
            return Ok(true);
        }

        [AuthorizeUser]
        [HttpGet("user")]
        public IActionResult UserMode()
        {
            return Ok(true);
        }
    }
}
