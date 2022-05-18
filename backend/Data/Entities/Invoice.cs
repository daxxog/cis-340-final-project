using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'invoice'.
    /// </summary>
    public partial class Invoice
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Invoice"/> class.
        /// </summary>
        public Invoice()
        {
            #region Generated Constructor
            CustomerActivities = new HashSet<CustomerActivity>();
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
        /// Gets or sets the property value representing column 'time_stamp'.
        /// </summary>
        /// <value>
        /// The property value representing column 'time_stamp'.
        /// </value>
        public long TimeStamp { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'body'.
        /// </summary>
        /// <value>
        /// The property value representing column 'body'.
        /// </value>
        public string Body { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="CustomerActivity" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="CustomerActivity" />.
        /// </value>
        public virtual ICollection<CustomerActivity> CustomerActivities { get; set; }

        #endregion

    }
}
