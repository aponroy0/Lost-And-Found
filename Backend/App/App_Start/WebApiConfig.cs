using System.Web.Http;
using System.Web.Http.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace App
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Enable CORS for specific origin
            var cors = new EnableCorsAttribute("http://localhost:5173", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
