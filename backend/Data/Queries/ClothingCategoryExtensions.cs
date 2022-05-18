using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.ClothingCategory" />.
    /// </summary>
    public static partial class ClothingCategoryExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.ClothingCategory"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.ClothingCategory GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.ClothingCategory> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.ClothingCategory> dbSet)
                return dbSet.Find(id);

            return queryable.FirstOrDefault(q => q.Id == id);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.ClothingCategory"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.ClothingCategory> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.ClothingCategory> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.ClothingCategory> dbSet)
                return dbSet.FindAsync(id);

            var task = queryable.FirstOrDefaultAsync(q => q.Id == id);
            return new ValueTask<ShopEasyAPI.Data.Entities.ClothingCategory>(task);
        }

        #endregion

    }
}
