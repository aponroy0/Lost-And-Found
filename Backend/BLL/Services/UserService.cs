using AutoMapper;
using BLL.DTO;
using DAL;
using DAL.EF.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    // This class contains services related to user management, including user registration.
    public class UserService
    {
        public static Mapper GetMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<User, UserDTO>().ReverseMap();
                cfg.CreateMap<User, LoginDTO>().ReverseMap();

            });
            return new Mapper(config);
        }

        //Registering a user
        public static bool CreateUser (UserDTO obj)
        {
            var user = GetMapper().Map<User>(obj);
            DataAccessFactory.UserData().CREATE(user);
            return true;
        }
    }
}
