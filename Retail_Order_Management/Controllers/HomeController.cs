using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using WebApplication1.ServiceTax;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public static int Row = 1;
        public HomeController()
        {
            
        }
        public ActionResult Index()
        {

            return View();
        }
        [HttpGet]
        public ActionResult GetRow(int rowId)
        {
            var model = new RowViewModel();
            model.Id = rowId;
            return PartialView("OrderRow",model);
        }

        public decimal GetServiceTax(int category)
        {
                    var model = new RowViewModel();
            ServiceFactory sf = new ServiceFactory();
            return (sf.GetCategory(category).GetServiceTax());
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}