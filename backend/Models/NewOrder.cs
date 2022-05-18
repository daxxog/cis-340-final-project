using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace ShopEasyAPI.Models
{
    public class NewOrder
    {
        [Required]
        public List<long> ProductIDs { get; set; }
    }
}
