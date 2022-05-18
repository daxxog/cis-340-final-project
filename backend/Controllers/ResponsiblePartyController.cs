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
    public class ResponsiblePartyController : ControllerBase
    {
        private readonly ShopEasyContext _context;

        public ResponsiblePartyController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/ResponsibleParty
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResponsibleParty>>> GetResponsibleParties()
        {
            return await _context.ResponsibleParties.ToListAsync();
        }

        // GET: api/ResponsibleParty/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ResponsibleParty>> GetResponsibleParty(long id)
        {
            var responsibleParty = await _context.ResponsibleParties.FindAsync(id);

            if (responsibleParty == null)
            {
                return NotFound();
            }

            return responsibleParty;
        }

        // PUT: api/ResponsibleParty/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResponsibleParty(long id, ResponsibleParty responsibleParty)
        {
            if (id != responsibleParty.Id)
            {
                return BadRequest();
            }

            _context.Entry(responsibleParty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResponsiblePartyExists(id))
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

        // POST: api/ResponsibleParty
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ResponsibleParty>> PostResponsibleParty(ResponsibleParty responsibleParty)
        {
            _context.ResponsibleParties.Add(responsibleParty);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResponsibleParty", new { id = responsibleParty.Id }, responsibleParty);
        }

        // DELETE: api/ResponsibleParty/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ResponsibleParty>> DeleteResponsibleParty(long id)
        {
            var responsibleParty = await _context.ResponsibleParties.FindAsync(id);
            if (responsibleParty == null)
            {
                return NotFound();
            }

            _context.ResponsibleParties.Remove(responsibleParty);
            await _context.SaveChangesAsync();

            return responsibleParty;
        }

        private bool ResponsiblePartyExists(long id)
        {
            return _context.ResponsibleParties.Any(e => e.Id == id);
        }
    }
}