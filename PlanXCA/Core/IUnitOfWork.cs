using System.Threading.Tasks;

namespace PlanXCA.Core
{
    public interface IUnitOfWork
    {
            Task CompleteAsync();
    }
}