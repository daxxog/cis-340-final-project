using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'customer_type'.
    /// </summary>
    public partial class CustomerType
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerType"/> class.
        /// </summary>
        public CustomerType()
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

        /// <summary>
        /// Gets or sets the property value representing column 'discount_percentage'.
        /// </summary>
        /// <value>
        /// The property value representing column 'discount_percentage'.
        /// </value>
        public long DiscountPercentage { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'apply_sales_tax'.
        /// </summary>
        /// <value>
        /// The property value representing column 'apply_sales_tax'.
        /// </value>
        public long ApplySalesTax { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'discount_product_type_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'discount_product_type_id'.
        /// </value>
        public long? DiscountProductTypeId { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="Customer" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="Customer" />.
        /// </value>
        public virtual ICollection<Customer> Customers { get; set; }

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="ProductType" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="ProductType" />.
        /// </value>
        /// <seealso cref="DiscountProductTypeId" />
        public virtual ProductType DiscountProductType { get; set; }

        #endregion

    }
}
