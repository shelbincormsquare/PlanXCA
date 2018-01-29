using System.Threading.Tasks;
using PlanXCA.Core;
using PlanXCA.Persistence;

namespace PlanXCA.Persistence
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly PlanXCADbContext context;
         public UnitOfWork (PlanXCADbContext context) {
            this.context = context;

        }
        public async Task CompleteAsync () {
            await context.SaveChangesAsync ();
        }
    }
}