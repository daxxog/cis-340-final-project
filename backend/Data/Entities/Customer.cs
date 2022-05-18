using System;
using System.Collections.Generic;

namespace ShopEasyAPI.Data.Entities
{
    /// <summary>
    /// Entity class representing data for table 'customer'.
    /// </summary>
    public partial class Customer
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Customer"/> class.
        /// </summary>
        public Customer()
        {
            #region Generated Constructor
            CustomerActivities = new HashSet<CustomerActivity>();
            UserLogins = new HashSet<UserLogin>();
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
        /// Gets or sets the property value representing column 'first_name'.
        /// </summary>
        /// <value>
        /// The property value representing column 'first_name'.
        /// </value>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'last_name'.
        /// </summary>
        /// <value>
        /// The property value representing column 'last_name'.
        /// </value>
        public string LastName { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'phone_number'.
        /// </summary>
        /// <value>
        /// The property value representing column 'phone_number'.
        /// </value>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'email_address'.
        /// </summary>
        /// <value>
        /// The property value representing column 'email_address'.
        /// </value>
        public string EmailAddress { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'customer_type_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'customer_type_id'.
        /// </value>
        public long CustomerTypeId { get; set; }

        /// <summary>
        /// Gets or sets the property value representing column 'responsible_party_id'.
        /// </summary>
        /// <value>
        /// The property value representing column 'responsible_party_id'.
        /// </value>
        public long ResponsiblePartyId { get; set; }

        #endregion

        #region Generated Relationships
        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="CustomerActivity" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="CustomerActivity" />.
        /// </value>
        public virtual ICollection<CustomerActivity> CustomerActivities { get; set; }

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="CustomerType" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="CustomerType" />.
        /// </value>
        /// <seealso cref="CustomerTypeId" />
        public virtual CustomerType CustomerType { get; set; }

        /// <summary>
        /// Gets or sets the navigation property for entity <see cref="ResponsibleParty" />.
        /// </summary>
        /// <value>
        /// The the navigation property for entity <see cref="ResponsibleParty" />.
        /// </value>
        /// <seealso cref="ResponsiblePartyId" />
        public virtual ResponsibleParty ResponsibleParty { get; set; }

        /// <summary>
        /// Gets or sets the navigation collection for entity <see cref="UserLogin" />.
        /// </summary>
        /// <value>
        /// The the navigation collection for entity <see cref="UserLogin" />.
        /// </value>
        public virtual ICollection<UserLogin> UserLogins { get; set; }

        #endregion

    }
}
