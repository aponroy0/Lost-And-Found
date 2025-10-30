using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Tables
{
    public class Category
    {
        // Constructor to initialize the Reports collection
        public Category()
        {
            this.Reports = new List<Report>();
        }


        [Key]
        public int CategoryId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string CategoryName { get; set; }

        public virtual ICollection<Report> Reports { get; set; }
    }
}
