using DAL.EF.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class CreateReportDTO
    {
        public string ItemName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public string Status { get; set; }
        public string ImageURL { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string ContactInfo { get; set; }
        public int PostedBy { get; set; }
        public bool IsClaimed { get; set; }

    }
}
