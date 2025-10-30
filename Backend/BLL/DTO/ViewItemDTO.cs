using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class ViewItemDTO
    {
        public string ItemName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string ImageURL { get; set; }
        public string LocationName { get; set; }
        public string ContactInfo { get; set; } // This will be seen by the registered memeber of the platform
        public int PostedBy { get; set; } // This will be seen by the registered memeber of the platform
        public bool IsClaimed { get; set; } // This will be seen by the registered memeber of the platform
    }
}
