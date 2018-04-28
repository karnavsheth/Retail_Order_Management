using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.ServiceTax
{
    public class ServiceFactory
    {
        public IServiceTax GetCategory(int category)
        {
             IServiceTax returnValue = null;
            if (category == 1)
            {
                returnValue = new Cat_A();
            }
            else if (category == 2)
            {

                returnValue = new Cat_B();

            }
            else
            {
                returnValue = new Cat_C();
            }
            return returnValue;
    }
    }
    }