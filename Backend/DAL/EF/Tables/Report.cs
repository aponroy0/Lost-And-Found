using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Tables
{
    public class Report
    {
        // Constructor to initialize PostedAt to the current date and time
        public Report()
        {
            this.PostedAt = DateTime.Now;
       
        }

        // Primary Key

        [Key]
        public int ItemId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string ItemName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Title { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Description { get; set; }

        [Required]
        [ForeignKey("CatId")]
        public int CategoryId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Status { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string ImageURL { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string LocationName { get; set; }

        [Required]
        public double Latitude { get; set; }

        [Required]
        public double Longitude { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string ContactInfo { get; set; }

        [Required]
        [ForeignKey("User_Id")]
        public int PostedBy { get; set; }

        [Required]
        public bool IsClaimed { get; set; } = false;
        /* If the ClaimedDate becomes true, 
           then the ClaimedDate will be updated.
           The logic will be implemented in the 
           BLL.
        */
        [Required]
        public DateTime PostedAt { get; set; }
        public DateTime? ClaimedDate { get; set; }


        // All ForeignKeys

        public virtual Category CatId { get; set; }
        public virtual User User_Id { get; set; }
    }
}
