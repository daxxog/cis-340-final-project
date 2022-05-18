using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ShopEasyAPI.Data
{
    /// <summary>
    /// A <see cref="DbContext" /> instance represents a session with the database and can be used to query and save instances of entities. 
    /// </summary>
    public partial class ShopEasyContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ShopEasyContext"/> class.
        /// </summary>
        /// <param name="options">The options to be used by this <see cref="DbContext" />.</param>
        public ShopEasyContext(DbContextOptions<ShopEasyContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=shop_easy.db");
        }

        #region Generated Properties
        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.AdminSiteSetting> AdminSiteSettings { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ClothingCategory"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ClothingCategory"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.ClothingCategory> ClothingCategories { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.CustomerActivity"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.CustomerActivity"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.CustomerActivity> CustomerActivities { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Customer"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Customer"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.Customer> Customers { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.CustomerType"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.CustomerType"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.CustomerType> CustomerTypes { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Invoice"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Invoice"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.Invoice> Invoices { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Product"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.Product"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.Product> Products { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ProductType"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ProductType"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.ProductType> ProductTypes { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ResponsibleParty"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.ResponsibleParty"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.ResponsibleParty> ResponsibleParties { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.UserLogin"/>.
        /// </summary>
        /// <value>
        /// The <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> that can be used to query and save instances of <see cref="ShopEasyAPI.Data.Entities.UserLogin"/>.
        /// </value>
        public virtual DbSet<ShopEasyAPI.Data.Entities.UserLogin> UserLogins { get; set; }

        #endregion

        /// <summary>
        /// Configure the model that was discovered from the entity types exposed in <see cref="T:Microsoft.EntityFrameworkCore.DbSet`1" /> properties on this context.
        /// </summary>
        /// <param name="modelBuilder">The builder being used to construct the model for this context.</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Generated Configuration
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.AdminSiteSettingMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.ClothingCategoryMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.CustomerActivityMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.CustomerMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.CustomerTypeMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.InvoiceMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.ProductMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.ProductTypeMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.ResponsiblePartyMap());
            modelBuilder.ApplyConfiguration(new ShopEasyAPI.Data.Mapping.UserLoginMap());
            #endregion
        }
    }
}
