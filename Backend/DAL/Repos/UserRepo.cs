using DAL.EF.Tables;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class UserRepo : DBRepo, IRepo<User, int, bool>, IAuth<bool>
    {
        // Here, we implement the Authenticate method from IAuth interface
        // to verify user credentials against the database.
        public bool Authenticate(string email, string password)
        {
            var data = (from u in db.Users where u.Email == email && u.HashPassword == password select u).FirstOrDefault();
            if(data != null)
            {
                return true;
            }
            return false;
        }

        // Implementation of the CREATE method to add a new user to the database.
        public bool CREATE(User obj)
        {
            db.Users.Add(obj);
            return db.SaveChanges() > 0;
        }

        // Implementation of the DELETE method to remove a user by ID.
        public bool DELETE(int id)
        {
            var st = GET(id);
            db.Users.Remove(st);

            return db.SaveChanges()>0;
        }


        // Implementation of the GET methods to retrieve users from the database.
        public List<User> GET()
        {
           var list = db.Users.ToList();
            return list;  
        }


        // Implementation of the GET method to retrieve a user by ID.
        public User GET(int id)
        {
            var st = db.Users.Find(id);
            return st;
        }

        // Implementation of the UPDATE method to update user details.
        public bool UPDATE(User obj)
        {
            var st = db.Users.Find(obj.UserId);
            db.Entry(st).CurrentValues.SetValues(st);
            return db.SaveChanges() >0;

        }
    }
}
