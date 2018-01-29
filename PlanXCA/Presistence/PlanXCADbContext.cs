using Microsoft.EntityFrameworkCore;
using PlanXCA.Core.Models;

namespace PlanXCA.Persistence
{
    public class PlanXCADbContext:DbContext
    {
        public DbSet<Project> Projects { get; set; }
        public DbSet<WorkItem> WorkItems { get; set; }
           public PlanXCADbContext(DbContextOptions<PlanXCADbContext> options)
      : base(options)
        {
        }
    }
}