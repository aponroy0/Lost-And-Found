using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class LoginDTO
    {
        public string Email { get; set; }
        public string HashPassword { get; set; }
    }
}
