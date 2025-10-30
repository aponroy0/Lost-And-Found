using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Tables
{
    public class User
    {
        public User()
        {
            this.Reports = new List<Report>();
            this.RoleId = 1;
            this.CreatedAt = DateTime.Now;

        }



        [Key]
        public int UserId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string HashPassword { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Phone { get; set; }

        [Required]
        [ForeignKey("Role_Id")]
        public int RoleId { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }



        // For foreign key
        public virtual Role Role_Id { get; set; }

        // List of Reports and Catagories that a user can see
        public virtual ICollection<Report> Reports { get; set; }
    }
}
