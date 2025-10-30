using DAL.EF.Tables;
using DAL.Interfaces;
using DAL.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    /// <summary>
    /// Here are the factory methods to create instances of data access repositories.
    /// This class provides static methods to get repository instances for different entities like User, Report, and Role.
    /// 
    /// </summary>
    public class DataAccessFactory
    {
        public static IRepo<User, int, bool> UserData()
        {
            return new UserRepo();
        }

        public static IRepo<Report, int, bool> ReportData()
        {
            return new ReportRepo();
        }
        //public static IRepo<Catagory, int, bool> CatagoryData()
        //{
        //    return new CatagoryRepo();
        //}

        public static IRole RoleData()
        {
            return new RoleRepo();
        }

        //
        public static IAuth<bool> AuthData()
        {
            return new UserRepo();
        }

        public static IRepo<Token, string, Token> TokenData()
        {
            return new TokenRepo();
        }
    }
}
