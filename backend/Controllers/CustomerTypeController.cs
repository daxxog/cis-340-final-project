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
    public class CustomerTypeController : ControllerBase
    {
        private readonly ShopEasyContext _context;

        public CustomerTypeController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/CustomerType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerType>>> GetCustomerTypes()
        {
            return await _context.CustomerTypes.ToListAsync();
        }

        // GET: api/CustomerType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerType>> GetCustomerType(long id)
        {
            var customerType = await _context.CustomerTypes.FindAsync(id);

            if (customerType == null)
            {
                return NotFound();
            }

            return customerType;
        }

        // PUT: api/CustomerType/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerType(long id, CustomerType customerType)
        {
            if (id != customerType.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerTypeExists(id))
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

        // POST: api/CustomerType
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CustomerType>> PostCustomerType(CustomerType customerType)
        {
            _context.CustomerTypes.Add(customerType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerType", new { id = customerType.Id }, customerType);
        }

        // DELETE: api/CustomerType/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CustomerType>> DeleteCustomerType(long id)
        {
            var customerType = await _context.CustomerTypes.FindAsync(id);
            if (customerType == null)
            {
                return NotFound();
            }

            _context.CustomerTypes.Remove(customerType);
            await _context.SaveChangesAsync();

            return customerType;
        }

        private bool CustomerTypeExists(long id)
        {
            return _context.CustomerTypes.Any(e => e.Id == id);
        }
    }
}