using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'customer_activity'.
    /// </summary>
    public partial class CustomerActivity
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerActivity"/> class.
        /// </summary>
        public CustomerActivity()
        {
            #region Generated Constructor
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
        /// Gets or sets the property value representing column 'customer_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'customer_id'.
        /// </value>
        public long CustomerId { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'product_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'product_id'.
        /// </value>
        public long ProductId { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'invoice_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'invoice_id'.
        /// </value>
        public long InvoiceId { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'how_many'.
        /// </summary>
        /// <value>
        /// The property value representing column 'how_many'.
        /// </value>
        public long HowMany { get; set; }

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

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="Invoice" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="Invoice" />.
        /// </value>
        /// <seealso cref="InvoiceId" />
        public virtual Invoice Invoice { get; set; }

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="Product" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="Product" />.
        /// </value>
        /// <seealso cref="ProductId" />
        public virtual Product Product { get; set; }

        #endregion

    }
}
