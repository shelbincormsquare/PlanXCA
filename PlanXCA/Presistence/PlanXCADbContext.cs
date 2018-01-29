using Microsoft.EntityFrameworkCore;

namespace PlanXCA.Persistence
{
    public class PlanXCADbContext:DbContext
    {
           public PlanXCADbContext(DbContextOptions<PlanXCADbContext> options)
      : base(options)
        {
        }
    }
}