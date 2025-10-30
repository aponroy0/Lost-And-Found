using DAL.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    // Base repository class that provides a database context for derived repository classes.   
    internal class DBRepo
    {
            internal MainContext db;
            internal DBRepo()
            {
                db = new MainContext();
            }
        
    }
}
