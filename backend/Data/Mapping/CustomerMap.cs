using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.Customer" />
    /// </summary>
    public partial class CustomerMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.Customer>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.Customer" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.Customer> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("customer");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("id")
                .HasColumnType("INTEGER")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.FirstName)
                .IsRequired()
                .HasColumnName("first_name")
                .HasColumnType("TEXT");

            builder.Property(t => t.LastName)
                .IsRequired()
                .HasColumnName("last_name")
                .HasColumnType("TEXT");

            builder.Property(t => t.PhoneNumber)
                .IsRequired()
                .HasColumnName("phone_number")
                .HasColumnType("TEXT");

            builder.Property(t => t.EmailAddress)
                .IsRequired()
                .HasColumnName("email_address")
                .HasColumnType("TEXT");

            builder.Property(t => t.CustomerTypeId)
                .IsRequired()
                .HasColumnName("customer_type_id")
                .HasColumnType("INTEGER");

            builder.Property(t => t.ResponsiblePartyId)
                .IsRequired()
                .HasColumnName("responsible_party_id")
                .HasColumnType("INTEGER");

            // relationships
            builder.HasOne(t => t.CustomerType)
                .WithMany(t => t.Customers)
                .HasForeignKey(d => d.CustomerTypeId)
                .HasConstraintName("4");

            builder.HasOne(t => t.ResponsibleParty)
                .WithMany(t => t.Customers)
                .HasForeignKey(d => d.ResponsiblePartyId)
                .HasConstraintName("5");

            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.Customer" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.Customer" /></summary>
            public const string Name = "customer";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.Id" /></summary>
            public const string Id = "id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.FirstName" /></summary>
            public const string FirstName = "first_name";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.LastName" /></summary>
            public const string LastName = "last_name";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.PhoneNumber" /></summary>
            public const string PhoneNumber = "phone_number";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.EmailAddress" /></summary>
            public const string EmailAddress = "email_address";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.CustomerTypeId" /></summary>
            public const string CustomerTypeId = "customer_type_id";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.Customer.ResponsiblePartyId" /></summary>
            public const string ResponsiblePartyId = "responsible_party_id";
        }
        #endregion
    }
}
