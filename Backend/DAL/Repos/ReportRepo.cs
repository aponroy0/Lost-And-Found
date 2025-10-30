using DAL.EF.Tables;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class ReportRepo :DBRepo, IRepo<Report, int, bool>
    {
        // Implementation of the CREATE method to add a new report to the database.
        public bool CREATE(Report obj)
        {

            db.Reports.Add(obj);
            return db.SaveChanges() > 0;

        }

        // Implementation of the DELETE method to remove a report by ID.
        public bool DELETE(int id)
        {
            var dt = GET(id);
            db.Reports.Remove(dt);
            return db.SaveChanges() > 0;
        }

        // Implementation of the GET methods to retrieve reports from the database.
        public List<Report> GET()
        {
            var rt = db.Reports.ToList();
            return rt;
        }

        // Implementation of the GET method to retrieve a report by ID.
        public Report GET(int id)
        { return db.Reports.Find(id);}

        // Implementation of the UPDATE method to update report details.
        public bool UPDATE(Report obj)
        {
            var up = db.Reports.Find(obj.ItemId);
            db.Entry(up).CurrentValues.SetValues(obj);
            return db.SaveChanges() > 0;
        }
    }
}
