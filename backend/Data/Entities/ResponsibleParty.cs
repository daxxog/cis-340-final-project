using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'responsible_party'.
    /// </summary>
    public partial class ResponsibleParty
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ResponsibleParty"/> class.
        /// </summary>
        public ResponsibleParty()
        {
            #region Generated Constructor
            Customers = new HashSet<Customer>();
            #endregion
        }

        #region Generated Properties
        /// <summary>
        /// Gets or sets the property value representing column 'id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'id'.
        /// </value>
        public long Id { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'name'.
        /// </summary>
        /// <value>
        /// The property value representing column 'name'.
        /// </value>
        public string Name { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="Customer" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="Customer" />.
        /// </value>
        public virtual ICollection<Customer> Customers { get; set; }

        #endregion

    }
}
