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
    public class ClothingCategoryController : ControllerBase
    {
        private readonly ShopEasyContext _context;

        public ClothingCategoryController(ShopEasyContext context)
        {
            _context = context;
        }

        // GET: api/ClothingCategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClothingCategory>>> GetClothingCategories()
        {
            return await _context.ClothingCategories.ToListAsync();
        }

        // GET: api/ClothingCategory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClothingCategory>> GetClothingCategory(long id)
        {
            var clothingCategory = await _context.ClothingCategories.FindAsync(id);

            if (clothingCategory == null)
            {
                return NotFound();
            }

            return clothingCategory;
        }

        // PUT: api/ClothingCategory/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClothingCategory(long id, ClothingCategory clothingCategory)
        {
            if (id != clothingCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(clothingCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClothingCategoryExists(id))
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

        // POST: api/ClothingCategory
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClothingCategory>> PostClothingCategory(ClothingCategory clothingCategory)
        {
            _context.ClothingCategories.Add(clothingCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClothingCategory", new { id = clothingCategory.Id }, clothingCategory);
        }

        // DELETE: api/ClothingCategory/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClothingCategory>> DeleteClothingCategory(long id)
        {
            var clothingCategory = await _context.ClothingCategories.FindAsync(id);
            if (clothingCategory == null)
            {
                return NotFound();
            }

            _context.ClothingCategories.Remove(clothingCategory);
            await _context.SaveChangesAsync();

            return clothingCategory;
        }

        private bool ClothingCategoryExists(long id)
        {
            return _context.ClothingCategories.Any(e => e.Id == id);
        }
    }
}