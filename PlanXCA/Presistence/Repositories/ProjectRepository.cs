using PlanXCA.Core.Models;
using PlanXCA.Core.Repositories;
using PlanXCA.Persistence;

namespace PlanXCA.Presistence.Repositories
{
    public class ProjectRepository:IProjectRepository
    {
          private readonly PlanXCADbContext context;
        public ProjectRepository (PlanXCADbContext context) {
            this.context = context;

        }
        public void Add (Project project) {
            context.Projects.Add (project);
        }

        public async Task<Project> GetProject (int id) {
            return await context.Projects.FindAsync (id);
        }

        public async Task<List<Project>> GetProjects () {
            return await context.Projects.ToListAsync ();
        }

        public void Remove (Project project) {
            context.Remove (project);
        }
    }
}