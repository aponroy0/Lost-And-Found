using DAL.EF.Tables;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class CategoryRepo : DBRepo, IRepo<Category, int, bool>
    {
        // Implementation of the CREATE method to add a new category to the database.
        public bool CREATE(Category obj)
        {
            db.Categories.Add(obj);
            return db.SaveChanges() > 0;
        }

        // Implementation of the DELETE method to remove a category by ID.
        public bool DELETE(int id)
        {
            var st = GET(id);
            db.Categories.Remove(st);

            return db.SaveChanges() > 0;
        }

        // Implementation of the GET methods to retrieve categories from the database.
        public List<Category> GET()
        {
            var list = db.Categories.ToList();
            return list;
        }

        // Implementation of the GET method to retrieve a category by ID.
        public Category GET(int id)
        {
            var st = db.Categories.Find(id);
            return st;
        }

        //  Implementation of the UPDATE method to update category details.
        public bool UPDATE(Category obj)
        {
            var st = db.Categories.Find(obj.CategoryId);
            db.Entry(st).CurrentValues.SetValues(st);
            return db.SaveChanges() > 0;
        }

    }
}
