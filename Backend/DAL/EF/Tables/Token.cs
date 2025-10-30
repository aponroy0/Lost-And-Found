using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Tables
{
    public class Token
    {
        [Key]
        public int TokenId { get; set; }
        [Required]
        [StringLength(100)]
        public string TokenKey { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public int UserId { get; set; }

    }
}
