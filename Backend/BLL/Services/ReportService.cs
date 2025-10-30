using AutoMapper;
using BLL.DTO;
using DAL;
using DAL.EF.Tables;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    // This class contains services related to reports, including creating, updating, deleting, and retrieving reports.
    public class ReportService
    {
        // AutoMapper configuration to map between Report entity and various DTOs.
        public static Mapper GetMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Report, CreateReportDTO>().ReverseMap();
                cfg.CreateMap<Report, FeedListDTO>().ReverseMap();
                cfg.CreateMap<Report, ViewItemDTO>().ReverseMap();

            });
            return new Mapper(config);
        }



        // Listing the items in the feed of the right side.
        public static List<FeedListDTO> Feedlist()
        {
            var ListOfItmes = DataAccessFactory.ReportData().GET();
            return GetMapper().Map<List<FeedListDTO>>(ListOfItmes);

        }
        // View of an item -> By a button click
        public static List<ViewItemDTO> viewitem()
        {
            var ListOfItmes = DataAccessFactory.ReportData().GET();
            return GetMapper().Map<List<ViewItemDTO>>(ListOfItmes);

        }

        // Creating a report
        public static bool CreateReport(CreateReportDTO obj)
        {
            var report = GetMapper().Map<Report>(obj);
            var data = DataAccessFactory.ReportData().CREATE(report);
            return data;

        }
        // Updating a report
        public static bool UpdateReport(CreateReportDTO obj)
        {
            var report = GetMapper().Map<Report>(obj);
            var data = DataAccessFactory.ReportData().UPDATE(report);
            return data;
        }
        // Deleting a report
        public static bool DeleteReport(int id)
        {
            var data = DataAccessFactory.ReportData().DELETE(id);
            return data;
        }

        // Searching a report via title and description
        public static List<FeedListDTO> SearchItem(string search)
        {
            var items  = DataAccessFactory.ReportData().GET();
            var keyword = search.ToLower();
            var data = (from i in items
                        where i.ItemName.ToLower().Contains(keyword) ||
                        i.Description.ToLower().Contains(keyword)
                        select i).ToList();
            return GetMapper().Map<List<FeedListDTO>>(data);
        }

    }
}
