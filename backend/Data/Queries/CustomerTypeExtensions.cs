using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.CustomerType" />.
    /// </summary>
    public static partial class CustomerTypeExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="discountProductTypeId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.CustomerType> ByDiscountProductTypeId(this IQueryable<ShopEasyAPI.Data.Entities.CustomerType> queryable, long? discountProductTypeId)
        {
            return queryable.Where(q => (q.DiscountProductTypeId == discountProductTypeId || (discountProductTypeId == null && q.DiscountProductTypeId == null)));
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.CustomerType"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.CustomerType GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.CustomerType> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.CustomerType> dbSet)
                return dbSet.Find(id);

            return queryable.FirstOrDefault(q => q.Id == id);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.CustomerType"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.CustomerType> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.CustomerType> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.CustomerType> dbSet)
                return dbSet.FindAsync(id);

            var task = queryable.FirstOrDefaultAsync(q => q.Id == id);
            return new ValueTask<ShopEasyAPI.Data.Entities.CustomerType>(task);
        }

        #endregion

    }
}
