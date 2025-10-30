using DAL.EF.Tables;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class RoleRepo :DBRepo, IRole
    {
        // Implementation of the GET methods to retrieve roles from the database.
        public List<Role> GET()
        {
            var roles = db.Roles.ToList();

            return roles;
        }
        // Implementation of the GET method to retrieve a role by ID.
        public Role GET(int id)
        {
            var role = db.Roles.Find(id);
            return role;
        }
    }
}
