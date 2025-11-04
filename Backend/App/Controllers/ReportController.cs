using BLL.DTO;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.UI.WebControls.WebParts;

namespace App.Controllers
{
    [EnableCors(origins: "http://localhost:5173", headers: "*", methods: "*")]
    [RoutePrefix("api/report")]
    public class ReportController : ApiController
    {
        [HttpGet]
        [Route("feedlist")]
        public HttpResponseMessage feedlist()
        {
            var reports = ReportService.Feedlist();

            try 
            {
                return Request.CreateResponse(HttpStatusCode.OK, reports);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);

            }

        }


        [HttpGet]
        [Route("viewitem")]
        public HttpResponseMessage viewitem()
        {
            var reports = ReportService.viewitem();

            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, reports);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);

            }

        }


        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create (CreateReportDTO obj)
        {
            var data = ReportService.CreateReport(obj);
            try
            {
                if (data)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Report Created Successfully! ");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Report Creation Failed! ");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpPost]
        [Route("update")]
        public HttpResponseMessage update (CreateReportDTO obj)
        {
            var data = ReportService.UpdateReport(obj);
            try
            {
                if (data)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Update Successfull! ");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Update Failed! ");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }


        [HttpDelete]
        [Route("deletereport/{id}")] 
        public HttpResponseMessage delete(int id)
        {
            var deleted = ReportService.DeleteReport(id);

            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Report deleted!");
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Report deletion failed");
            }
        }
        [HttpGet]
        [Route("search")] 
        public HttpResponseMessage search(string search)
        {
            var searcheditems = ReportService.SearchItem(search);

            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, searcheditems);
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Searching failed! ");
            }
        }
        [HttpGet]
        [Route("lostitems")]
        public HttpResponseMessage lostItems ()
        {
            var data = LostAndFoundService.LostItems();
            try
            {
                if(data != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data);
                }
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No lost items found! ");
            }

            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpGet]
        [Route("founditems")]
        public HttpResponseMessage foundItems()
        {
            var data = LostAndFoundService.FoundItems();
            try
            {
                if (data != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data);
                }
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No found items found! ");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
