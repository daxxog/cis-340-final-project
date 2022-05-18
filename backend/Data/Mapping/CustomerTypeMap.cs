using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.CustomerType" />
    /// </summary>
    public partial class CustomerTypeMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.CustomerType>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.CustomerType" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.CustomerType> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("customer_type");

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

            builder.Property(t => t.DiscountPercentage)
                .IsRequired()
                .HasColumnName("discount_percentage")
                .HasColumnType("INTEGER");

            builder.Property(t => t.ApplySalesTax)
                .IsRequired()
                .HasColumnName("apply_sales_tax")
                .HasColumnType("INTEGER")
                .HasDefaultValueSql("1");

            builder.Property(t => t.DiscountProductTypeId)
                .HasColumnName("discount_product_type_id")
                .HasColumnType("INTEGER");

            // relationships
            builder.HasOne(t => t.DiscountProductType)
                .WithMany(t => t.DiscountCustomerTypes)
                .HasForeignKey(d => d.DiscountProductTypeId)
                .HasConstraintName("1");

            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.CustomerType" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.CustomerType" /></summary>
            public const string Name = "customer_type";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerType.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerType.Name" /></summary>
            public const string Name = "name";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerType.DiscountPercentage" /></summary>
            public const string DiscountPercentage = "discount_percentage";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerType.ApplySalesTax" /></summary>
            public const string ApplySalesTax = "apply_sales_tax";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerType.DiscountProductTypeId" /></summary>
            public const string DiscountProductTypeId = "discount_product_type_id";
        }
        #endregion
    }
}
