using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.CustomerActivity" />.
    /// </summary>
    public static partial class CustomerActivityExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="customerId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> ByCustomerId(this IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> queryable, long customerId)
        {
            return queryable.Where(q => q.CustomerId == customerId);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.CustomerActivity"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.CustomerActivity GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.CustomerActivity> dbSet)
                return dbSet.Find(id);

            return queryable.FirstOrDefault(q => q.Id == id);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="id">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.CustomerActivity"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.CustomerActivity> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> queryable, long id)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.CustomerActivity> dbSet)
                return dbSet.FindAsync(id);

            var task = queryable.FirstOrDefaultAsync(q => q.Id == id);
            return new ValueTask<ShopEasyAPI.Data.Entities.CustomerActivity>(task);
        }

        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="invoiceId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> ByInvoiceId(this IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> queryable, long invoiceId)
        {
            return queryable.Where(q => q.InvoiceId == invoiceId);
        }

        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="productId">The value to filter by.</param>
        /// <returns>An <see cref="T: System.Linq.IQueryable`1" /> that contains elements from the input sequence that satisfy the condition specified.</returns>
        public static IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> ByProductId(this IQueryable<ShopEasyAPI.Data.Entities.CustomerActivity> queryable, long productId)
        {
            return queryable.Where(q => q.ProductId == productId);
        }

        #endregion

    }
}
