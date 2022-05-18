using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'admin_site_settings'.
    /// </summary>
    public partial class AdminSiteSetting
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AdminSiteSetting"/> class.
        /// </summary>
        public AdminSiteSetting()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        /// <summary>
        /// Gets or sets the property value representing column 'setting'.
        /// </summary>
        /// <value>
        /// The property value representing column 'setting'.
        /// </value>
        public string Setting { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'value'.
        /// </summary>
        /// <value>
        /// The property value representing column 'value'.
        /// </value>
        public string Value { get; set; }

        #endregion

        #region Generated Relationships
        #endregion

    }
}
