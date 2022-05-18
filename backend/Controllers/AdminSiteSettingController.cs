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
    public class AdminSiteSettingController : ControllerBase
    {
        private readonly ShopEasyContext _context;

        public AdminSiteSettingController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/AdminSiteSetting
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminSiteSetting>>> GetAdminSiteSettings()
        {
            return await _context.AdminSiteSettings.ToListAsync();
        }

        // GET: api/AdminSiteSetting/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminSiteSetting>> GetAdminSiteSetting(string id)
        {
            var adminSiteSetting = await _context.AdminSiteSettings.FindAsync(id);

            if (adminSiteSetting == null)
            {
                return NotFound();
            }

            return adminSiteSetting;
        }

        // PUT: api/AdminSiteSetting/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminSiteSetting(string id, AdminSiteSetting adminSiteSetting)
        {
            if (id != adminSiteSetting.Setting)
            {
                return BadRequest();
            }

            _context.Entry(adminSiteSetting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminSiteSettingExists(id))
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

        // POST: api/AdminSiteSetting
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AdminSiteSetting>> PostAdminSiteSetting(AdminSiteSetting adminSiteSetting)
        {
            _context.AdminSiteSettings.Add(adminSiteSetting);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AdminSiteSettingExists(adminSiteSetting.Setting))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAdminSiteSetting", new { id = adminSiteSetting.Setting }, adminSiteSetting);
        }

        // DELETE: api/AdminSiteSetting/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdminSiteSetting>> DeleteAdminSiteSetting(string id)
        {
            var adminSiteSetting = await _context.AdminSiteSettings.FindAsync(id);
            if (adminSiteSetting == null)
            {
                return NotFound();
            }

            _context.AdminSiteSettings.Remove(adminSiteSetting);
            await _context.SaveChangesAsync();

            return adminSiteSetting;
        }

        private bool AdminSiteSettingExists(string id)
        {
            return _context.AdminSiteSettings.Any(e => e.Setting == id);
        }
    }
}