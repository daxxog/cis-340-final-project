using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.Product" />
    /// </summary>
    public partial class ProductMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.Product>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.Product" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.Product> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("product");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("id")
                .HasColumnType("INTEGER")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.PriceCents)
                .IsRequired()
                .HasColumnName("price_cents")
                .HasColumnType("INTEGER");

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasColumnType("TEXT");

            builder.Property(t => t.Description)
                .HasColumnName("description")
                .HasColumnType("TEXT");

            builder.Property(t => t.ClothingCategoryId)
                .HasColumnName("clothing_category_id")
                .HasColumnType("INTEGER");

            builder.Property(t => t.ProductTypeId)
                .IsRequired()
                .HasColumnName("product_type_id")
                .HasColumnType("INTEGER");

            // relationships
            builder.HasOne(t => t.ProductType)
                .WithMany(t => t.Products)
                .HasForeignKey(d => d.ProductTypeId)
                .HasConstraintName("2");

            builder.HasOne(t => t.ClothingCategory)
                .WithMany(t => t.Products)
                .HasForeignKey(d => d.ClothingCategoryId)
                .HasConstraintName("3");

            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.Product" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.Product" /></summary>
            public const string Name = "product";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.PriceCents" /></summary>
            public const string PriceCents = "price_cents";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.Name" /></summary>
            public const string Name = "name";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.Description" /></summary>
            public const string Description = "description";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.ClothingCategoryId" /></summary>
            public const string ClothingCategoryId = "clothing_category_id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Product.ProductTypeId" /></summary>
            public const string ProductTypeId = "product_type_id";
        }
        #endregion
    }
}
