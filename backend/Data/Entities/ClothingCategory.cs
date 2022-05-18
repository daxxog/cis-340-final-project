using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'clothing_category'.
    /// </summary>
    public partial class ClothingCategory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClothingCategory"/> class.
        /// </summary>
        public ClothingCategory()
        {
            #region Generated Constructor
            Products = new HashSet<Product>();
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
        /// Gets or sets the navigation collection for entity <see cref="Product" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="Product" />.
        /// </value>
        public virtual ICollection<Product> Products { get; set; }

        #endregion

    }
}
