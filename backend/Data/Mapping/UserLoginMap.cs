using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ShopEasyAPI.Data.Mapping
{
    /// <summary>
    /// Allows configuration for an entity type <see cref="ShopEasyAPI.Data.Entities.UserLogin" />
    /// </summary>
    public partial class UserLoginMap
        : IEntityTypeConfiguration<ShopEasyAPI.Data.Entities.UserLogin>
    {
        /// <summary>
        /// Configures the entity of type <see cref="ShopEasyAPI.Data.Entities.UserLogin" />
        /// </summary>
        /// <param name="builder">The builder to be used to configure the entity type.</param>
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShopEasyAPI.Data.Entities.UserLogin> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("user_login");

            // key
            builder.HasKey(t => t.Username);

            // properties
            builder.Property(t => t.Username)
                .IsRequired()
                .HasColumnName("username")
                .HasColumnType("TEXT");

            builder.Property(t => t.PasswordHashed)
                .IsRequired()
                .HasColumnName("password_hashed")
                .HasColumnType("TEXT");

            builder.Property(t => t.IsAdmin)
                .IsRequired()
                .HasColumnName("is_admin")
                .HasColumnType("INTEGER");

            builder.Property(t => t.CustomerId)
                .HasColumnName("customer_id")
                .HasColumnType("INTEGER");

            // relationships
            builder.HasOne(t => t.Customer)
                .WithMany(t => t.UserLogins)
                .HasForeignKey(d => d.CustomerId);

            #endregion
        }

        #region Generated Constants
        public struct Table
        {
            /// <summary>Table Schema name constant for entity <see cref="ShopEasyAPI.Data.Entities.UserLogin" /></summary>
            public const string Schema = "";
            /// <summary>Table Name constant for entity <see cref="ShopEasyAPI.Data.Entities.UserLogin" /></summary>
            public const string Name = "user_login";
        }

        public struct Columns
        {
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.UserLogin.Username" /></summary>
            public const string Username = "username";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.UserLogin.PasswordHashed" /></summary>
            public const string PasswordHashed = "password_hashed";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.UserLogin.IsAdmin" /></summary>
            public const string IsAdmin = "is_admin";
            /// <summary>Column Name constant for property <see cref="ShopEasyAPI.Data.Entities.UserLogin.CustomerId" /></summary>
            public const string CustomerId = "customer_id";
        }
        #endregion
    }
}
