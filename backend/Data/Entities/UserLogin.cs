using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'user_login'.
    /// </summary>
    public partial class UserLogin
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserLogin"/> class.
        /// </summary>
        public UserLogin()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        /// <summary>
        /// Gets or sets the property value representing column 'username'.
        /// </summary>
        /// <value>
        /// The property value representing column 'username'.
        /// </value>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'password_hashed'.
        /// </summary>
        /// <value>
        /// The property value representing column 'password_hashed'.
        /// </value>
        public string PasswordHashed { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'is_admin'.
        /// </summary>
        /// <value>
        /// The property value representing column 'is_admin'.
        /// </value>
        public long IsAdmin { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'customer_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'customer_id'.
        /// </value>
        public long? CustomerId { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="Customer" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="Customer" />.
        /// </value>
        /// <seealso cref="CustomerId" />
        public virtual Customer Customer { get; set; }

        #endregion

    }
}
