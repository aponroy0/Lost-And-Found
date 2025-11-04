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
    public static class LostAndFoundService
    {
        public static Mapper GetMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<LostDTO, Report>().ReverseMap();
       

            });
            return new Mapper(config);
        }
        public static List<LostDTO> LostItems()
        {
            var lostItems = DataAccessFactory.ReportData()
                                 .GET()
                                 .Where(d => d.Status == "Lost")
                                 .ToList();
            return GetMapper().Map<List<LostDTO>>(lostItems);

        }

        public static List<FoundDTO> FoundItems()
        {
            var foundItems = DataAccessFactory.ReportData()
                                .GET()
                                .Where(d => d.Status == "Lost")
                                .ToList();
            return GetMapper().Map<List<FoundDTO>>(foundItems);
        }


    }
}
