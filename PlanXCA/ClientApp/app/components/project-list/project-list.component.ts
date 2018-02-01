import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource= new MatTableDataSource<Project>(this.projects);
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      console.log("JGHS", this.projects);

    });
  }
}
