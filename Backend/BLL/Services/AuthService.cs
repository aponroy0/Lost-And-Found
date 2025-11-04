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
    // This class is for user authentication services and logics.
    public class AuthService
    {
        // This class is for user authentication services and logics.
        public static TokenDTO AuthenticateUser(string email, string password)
        {
            // Here, we would typically call the data access layer to verify user credentials.
            // For example:
            var isAuthenticated = DataAccessFactory.AuthData().Authenticate(email, password);

            // If authentication is successful, generate and return a token.
            if (isAuthenticated)
            {
                var userData = DataAccessFactory.UserData().GET().FirstOrDefault(u=> u.Email == email);
                
                var token = new Token();
                token.UserId = userData.UserId;
                token.TokenKey = Guid.NewGuid().ToString();
                token.Name = userData.Name;
                token.CreatedAt = DateTime.Now;

                var response = DataAccessFactory.TokenData().CREATE(token);
                if(response !=null)
                {
                    var cfg = new AutoMapper.MapperConfiguration(c =>
                    {
                        c.CreateMap<Token, TokenDTO>();
                    });
                    var mapper = new Mapper(cfg);
                    return mapper.Map<TokenDTO>(response);
                }
             
            }
            return null;
        }
    }
}
