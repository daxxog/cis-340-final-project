using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.ProductType" />.
    /// </summary>
    public static partial class ProductTypeExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.ProductType"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.ProductType GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.ProductType> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.ProductType> dbSet)
                return dbSet.Find(id);

            return queryable.FirstOrDefault(q => q.Id == id);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.ProductType"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.ProductType> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.ProductType> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.ProductType> dbSet)
                return dbSet.FindAsync(id);

            var task = queryable.FirstOrDefaultAsync(q => q.Id == id);
            return new ValueTask<ShopEasyAPI.Data.Entities.ProductType>(task);
        }

        #endregion

    }
}
