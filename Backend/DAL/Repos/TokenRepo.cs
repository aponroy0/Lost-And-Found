using DAL.EF.Tables;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class TokenRepo : DBRepo, IRepo<Token, string, Token>
    {
        // Implementation of the CREATE method to add a new token to the database.
        // This haappens when a user logs in successfully. A token is generated for session management and 
        // stored in the database.
        public Token CREATE(Token obj)
        {
            var token = db.Tokens.Add(obj);
            if (db.SaveChanges() > 0) return token;
            
            return null;
        }

        public bool DELETE(string id)
        {
            throw new NotImplementedException();
        }

        public List<Token> GET()
        {
            throw new NotImplementedException();
        }

        // Implementation of the GET method to retrieve a token by its key.
        public Token GET(string id)
        {
            var data = (from t in db.Tokens where t.TokenKey == id select t).FirstOrDefault();
            return data;
        }

        // Implementation of the UPDATE method to update token details.
        public Token UPDATE(Token obj)
        {
            var token = db.Tokens.Find(obj.TokenId);
            db.Entry(token).CurrentValues.SetValues(obj);
            if (db.SaveChanges() > 0) return token;

            return null;
        }
    }
}
