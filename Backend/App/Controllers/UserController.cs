using BLL.DTO;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace App.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("create")]
        public HttpResponseMessage createUser (UserDTO obj)
        {
            var data = UserService.CreateUser(obj);
            try
            {
                if(data)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Registration Successfull! ");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Registration Failed! ");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpPost]
        [Route("login")]
        public HttpResponseMessage login (LoginDTO obj)
        {
            var data = AuthService.AuthenticateUser(obj.Email, obj.HashPassword);
            try
            {
                if(data != null) // Why I used null?
                                 // Cause, data var will receive TokenDTO object if authentication is successful not
                                 // a boolean value. In boolean return type, we directly check true/false.
                                 // For example, " if(data)..." for boolean.
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Login Failed! ");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        
    }
}
