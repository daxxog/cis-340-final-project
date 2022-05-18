using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.CustomerActivity" />
    /// </summary>
    public partial class CustomerActivityMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.CustomerActivity>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.CustomerActivity" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.CustomerActivity> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("customer_activity");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("id")
                .HasColumnType("INTEGER")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.CustomerId)
                .IsRequired()
                .HasColumnName("customer_id")
                .HasColumnType("INTEGER");

            builder.Property(t => t.ProductId)
                .IsRequired()
                .HasColumnName("product_id")
                .HasColumnType("INTEGER");

            builder.Property(t => t.InvoiceId)
                .IsRequired()
                .HasColumnName("invoice_id")
                .HasColumnType("INTEGER");

            builder.Property(t => t.HowMany)
                .IsRequired()
                .HasColumnName("how_many")
                .HasColumnType("INTEGER")
                .HasDefaultValueSql("1");

            // relationships
            builder.HasOne(t => t.Invoice)
                .WithMany(t => t.CustomerActivities)
                .HasForeignKey(d => d.InvoiceId)
                .HasConstraintName("6");

            builder.HasOne(t => t.Product)
                .WithMany(t => t.CustomerActivities)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("7");

            builder.HasOne(t => t.Customer)
                .WithMany(t => t.CustomerActivities)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("8");

            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.CustomerActivity" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.CustomerActivity" /></summary>
            public const string Name = "customer_activity";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerActivity.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerActivity.CustomerId" /></summary>
            public const string CustomerId = "customer_id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerActivity.ProductId" /></summary>
            public const string ProductId = "product_id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerActivity.InvoiceId" /></summary>
            public const string InvoiceId = "invoice_id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.CustomerActivity.HowMany" /></summary>
            public const string HowMany = "how_many";
        }
        #endregion
    }
}
