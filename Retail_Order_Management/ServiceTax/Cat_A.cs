﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.ServiceTax
{
    public class Cat_A : IServiceTax
    {
        public decimal GetServiceTax()
        {
            return 10;
        }
    }
}