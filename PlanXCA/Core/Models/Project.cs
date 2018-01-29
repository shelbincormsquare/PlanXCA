using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace PlanXCA.Core.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LongDescription { get; set; }
        public string ShortDescription { get; set; }
        public ICollection<WorkItem> WorkItems { get; set; }

        public Project()
        {
            WorkItems = new Collection<WorkItem>();
        }
    }
}