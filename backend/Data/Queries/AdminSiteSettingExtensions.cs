using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Queries
{
    /// <summary>
    /// Query extensions for entity <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting" />.
    /// </summary>
    public static partial class AdminSiteSettingExtensions
    {
        #region Generated Extensions
        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="setting">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.AdminSiteSetting"/> or null if not found.</returns>
        public static ShopEasyAPI.Data.Entities.AdminSiteSetting GetByKey(this IQueryable<ShopEasyAPI.Data.Entities.AdminSiteSetting> queryable, string setting)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.AdminSiteSetting> dbSet)
                return dbSet.Find(setting);

            return queryable.FirstOrDefault(q => q.Setting == setting);
        }

        /// <summary>
        /// Gets an instance by the primary key.
        /// </summary>
        /// <param name="queryable">An <see cref="T:System.Linq.IQueryable`1" /> to filter.</param>
        /// <param name="setting">The value to filter by.</param>
        /// <returns>An instance of <see cref="T:ShopEasyAPI.Data.Entities.AdminSiteSetting"/> or null if not found.</returns>
        public static ValueTask<ShopEasyAPI.Data.Entities.AdminSiteSetting> GetByKeyAsync(this IQueryable<ShopEasyAPI.Data.Entities.AdminSiteSetting> queryable, string setting)
        {
            if (queryable is DbSet<ShopEasyAPI.Data.Entities.AdminSiteSetting> dbSet)
                return dbSet.FindAsync(setting);

            var task = queryable.FirstOrDefaultAsync(q => q.Setting == setting);
            return new ValueTask<ShopEasyAPI.Data.Entities.AdminSiteSetting>(task);
        }

        #endregion

    }
}
