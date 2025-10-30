using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class FeedListDTO
    {
        public int ItemId { get; set; }
        public string ImageURL { get; set; }
        public string ItemName { get; set; }
        public string Title { get; set; }
        public string LocationName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime PostedAt { get; set; }



    }
}
