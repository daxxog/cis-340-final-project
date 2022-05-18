using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.UserLogin" />.
    /// </summary>
    public static partial class UserLoginExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="customerId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.UserLogin> ByCustomerId(this IQueryable<ShopEasyAPI.Data.Entities.UserLogin> queryable, long? customerId)
        {
            return queryable.Where(q => (q.CustomerId == customerId || (customerId == null && q.CustomerId == null)));
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="username">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.UserLogin"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.UserLogin GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.UserLogin> queryable, string username)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.UserLogin> dbSet)
                return dbSet.Find(username);

            return queryable.FirstOrDefault(q => q.Username == username);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="username">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.UserLogin"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.UserLogin> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.UserLogin> queryable, string username)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.UserLogin> dbSet)
                return dbSet.FindAsync(username);

            var task = queryable.FirstOrDefaultAsync(q => q.Username == username);
            return new ValueTask<ShopEasyAPI.Data.Entities.UserLogin>(task);
        }

        #endregion

    }
}
