using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.Product" />.
    /// </summary>
    public static partial class ProductExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="clothingCategoryId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.Product> ByClothingCategoryId(this IQueryable<ShopEasyAPI.Data.Entities.Product> queryable, long? clothingCategoryId)
        {
            return queryable.Where(q => (q.ClothingCategoryId == clothingCategoryId || (clothingCategoryId == null && q.ClothingCategoryId == null)));
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.Product"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.Product GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.Product> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.Product> dbSet)
                return dbSet.Find(id);

            return queryable.FirstOrDefault(q => q.Id == id);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.Product"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.Product> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.Product> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.Product> dbSet)
                return dbSet.FindAsync(id);

            var task = queryable.FirstOrDefaultAsync(q => q.Id == id);
            return new ValueTask<ShopEasyAPI.Data.Entities.Product>(task);
        }

        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="productTypeId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.Product> ByProductTypeId(this IQueryable<ShopEasyAPI.Data.Entities.Product> queryable, long productTypeId)
        {
            return queryable.Where(q => q.ProductTypeId == productTypeId);
        }

        #endregion

    }
}
