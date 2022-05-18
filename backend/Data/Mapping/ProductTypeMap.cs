using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.ProductType" />
    /// </summary>
    public partial class ProductTypeMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.ProductType>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.ProductType" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.ProductType> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("product_type");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("id")
                .HasColumnType("INTEGER")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasColumnType("TEXT");

            // relationships
            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.ProductType" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.ProductType" /></summary>
            public const string Name = "product_type";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.ProductType.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.ProductType.Name" /></summary>
            public const string Name = "name";
        }
        #endregion
    }
}
