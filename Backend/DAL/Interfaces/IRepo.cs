using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IRepo<CLASS, ID, RET>
    {
        List<CLASS> GET();
        CLASS GET(ID id);
        RET CREATE(CLASS obj);
        RET UPDATE(CLASS obj);
        bool DELETE(ID id);
    }
}
