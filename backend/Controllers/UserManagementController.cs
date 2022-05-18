using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using ShopEasyAPI.Models;
using ShopEasyAPI.Data;
using ShopEasyAPI.Data.Entities;


namespace ShopEasyAPI.Controllers {
    [ApiController]
    [AuthorizeAdmin]
    [Route("api/[controller]")]
    public class UserManagementController : ControllerBase {
        private readonly ShopEasyContext _context;

        public UserManagementController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/UserManagement
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetUser>>> GetUserLogins()
        {
            ActionResult<IEnumerable<UserLogin>> userLogins = await _context.UserLogins.ToListAsync();
            List<GetUser> getUsers = new List<GetUser>();

            foreach (UserLogin userLogin in userLogins.Value) {
                getUsers.Add(new GetUser(userLogin));
            }

            return getUsers;
        }

        // GET: api/UserManagement/{username}
        [HttpGet("{username}")]
        public async Task<ActionResult<GetUser>> GetUserLogin(string username)
        {
            var userLogin = await _context.UserLogins.FindAsync(username);

            if (userLogin == null)
            {
                return NotFound();
            }

            return new GetUser(userLogin);
        }

        // PUT: api/UserManagement/{username}
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{username}")]
        public async Task<IActionResult> UpdateUser(string username, UpdateUser updateUser)
        {
            if (username != updateUser.Username)
            {
                return BadRequest();
            }

            var userLogin = await _context.UserLogins.FindAsync(username);

            if (userLogin == null)
            {
                return NotFound();
            }

            if(updateUser.Password != null) {
                userLogin.PasswordHashed = Crypto.HashPassword(updateUser.Password);
            }

            if(updateUser.CustomerId != null) {
                userLogin.CustomerId = updateUser.CustomerId;
            }

            if(updateUser.IsAdmin != null) {
                userLogin.IsAdmin = (updateUser.IsAdmin ?? false) ? 1 : 0;
            }

            _context.Entry(userLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(username))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserManagement
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<GetUser>> CreateUser(NewUser newUser)
        {
            UserLogin newUserLogin;

            if(newUser.CustomerId == null) {
                newUserLogin = new UserLogin{
                    Username = newUser.Username,
                    PasswordHashed = Crypto.HashPassword(newUser.Password),
                    IsAdmin = newUser.IsAdmin ? 1 : 0
                };
            } else {
                newUserLogin = new UserLogin{
                    Username = newUser.Username,
                    PasswordHashed = Crypto.HashPassword(newUser.Password),
                    IsAdmin = newUser.IsAdmin ? 1 : 0,
                    CustomerId = newUser.CustomerId
                };
            }
            _context.UserLogins.Add(newUserLogin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserLoginExists(newUserLogin.Username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserLogin", new { username = newUserLogin.Username }, new GetUser(newUserLogin));
        }

        // DELETE: api/UserLogin/{{username}}
        [HttpDelete("{username}")]
        public async Task<ActionResult<UserLogin>> DeleteUserLogin(string username)
        {
            var userLogin = await _context.UserLogins.FindAsync(username);
            if (userLogin == null)
            {
                return NotFound();
            }

            _context.UserLogins.Remove(userLogin);
            await _context.SaveChangesAsync();

            return userLogin;
        }

        private bool UserLoginExists(string id)
        {
            return _context.UserLogins.Any(e => e.Username == id);
        }
    }
}
