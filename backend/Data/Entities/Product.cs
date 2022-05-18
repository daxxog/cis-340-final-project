using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'product'.
    /// </summary>
    public partial class Product
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Product"/> class.
        /// </summary>
        public Product()
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
        /// Gets or sets the property value representing column 'price_cents'.
        /// </summary>
        /// <value>
        /// The property value representing column 'price_cents'.
        /// </value>
        public long PriceCents { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'name'.
        /// </summary>
        /// <value>
        /// The property value representing column 'name'.
        /// </value>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'description'.
        /// </summary>
        /// <value>
        /// The property value representing column 'description'.
        /// </value>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'clothing_category_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'clothing_category_id'.
        /// </value>
        public long? ClothingCategoryId { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'product_type_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'product_type_id'.
        /// </value>
        public long ProductTypeId { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="ClothingCategory" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="ClothingCategory" />.
        /// </value>
        /// <seealso cref="ClothingCategoryId" />
        public virtual ClothingCategory ClothingCategory { get; set; }

        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="CustomerActivity" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="CustomerActivity" />.
        /// </value>
        public virtual ICollection<CustomerActivity> CustomerActivities { get; set; }

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="ProductType" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="ProductType" />.
        /// </value>
        /// <seealso cref="ProductTypeId" />
        public virtual ProductType ProductType { get; set; }

        #endregion

    }
}
