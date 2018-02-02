import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  private projects: Project[] = [];
  dataSource: any;
  displayedColumns = ['name', 'name', 'name', 'name'];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(data => {
        this.projects = data;
        this.dataSource = new MatTableDataSource<Project>(this.projects);
      });
  }


}
