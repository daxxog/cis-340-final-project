using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting" />
    /// </summary>
    public partial class AdminSiteSettingMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.AdminSiteSetting>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.AdminSiteSetting> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("admin_site_settings");

            // key
            builder.HasKey(t => t.Setting);

            // properties
            builder.Property(t => t.Setting)
                .IsRequired()
                .HasColumnName("setting")
                .HasColumnType("TEXT");

            builder.Property(t => t.Value)
                .IsRequired()
                .HasColumnName("value")
                .HasColumnType("TEXT");

            // relationships
            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting" /></summary>
            public const string Name = "admin_site_settings";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting.Setting" /></summary>
            public const string Setting = "setting";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.AdminSiteSetting.Value" /></summary>
            public const string Value = "value";
        }
        #endregion
    }
}
