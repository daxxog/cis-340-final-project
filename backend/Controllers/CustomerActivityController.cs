using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopEasyAPI.Data;
using ShopEasyAPI.Data.Entities;

namespace ShopEasyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AuthorizeAdmin]
    public class CustomerActivityController : ControllerBase
    {
        private readonly ShopEasyContext _context;

        public CustomerActivityController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/CustomerActivity
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerActivity>>> GetCustomerActivities()
        {
            return await _context.CustomerActivities.ToListAsync();
        }

        // GET: api/CustomerActivity/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerActivity>> GetCustomerActivity(long id)
        {
            var customerActivity = await _context.CustomerActivities.FindAsync(id);

            if (customerActivity == null)
            {
                return NotFound();
            }

            return customerActivity;
        }

        // PUT: api/CustomerActivity/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerActivity(long id, CustomerActivity customerActivity)
        {
            if (id != customerActivity.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerActivity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerActivityExists(id))
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

        // POST: api/CustomerActivity
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CustomerActivity>> PostCustomerActivity(CustomerActivity customerActivity)
        {
            _context.CustomerActivities.Add(customerActivity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerActivity", new { id = customerActivity.Id }, customerActivity);
        }

        // DELETE: api/CustomerActivity/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CustomerActivity>> DeleteCustomerActivity(long id)
        {
            var customerActivity = await _context.CustomerActivities.FindAsync(id);
            if (customerActivity == null)
            {
                return NotFound();
            }

            _context.CustomerActivities.Remove(customerActivity);
            await _context.SaveChangesAsync();

            return customerActivity;
        }

        private bool CustomerActivityExists(long id)
        {
            return _context.CustomerActivities.Any(e => e.Id == id);
        }
    }
}