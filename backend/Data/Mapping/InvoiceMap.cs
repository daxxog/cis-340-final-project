using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.Invoice" />
    /// </summary>
    public partial class InvoiceMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.Invoice>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.Invoice" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.Invoice> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("invoice");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("id")
                .HasColumnType("INTEGER")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.TimeStamp)
                .IsRequired()
                .HasColumnName("time_stamp")
                .HasColumnType("INTEGER");

            builder.Property(t => t.Body)
                .IsRequired()
                .HasColumnName("body")
                .HasColumnType("TEXT");

            // relationships
            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.Invoice" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.Invoice" /></summary>
            public const string Name = "invoice";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Invoice.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Invoice.TimeStamp" /></summary>
            public const string TimeStamp = "time_stamp";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Invoice.Body" /></summary>
            public const string Body = "body";
        }
        #endregion
    }
}
