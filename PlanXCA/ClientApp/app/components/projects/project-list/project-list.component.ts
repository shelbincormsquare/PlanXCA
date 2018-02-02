import { Project } from './../../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  private projects: Project[] = [];
  dataSource: any;
  displayedColumns = ['name', 'name', 'name', 'customColumn1'];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(data => {
        this.projects = data;
        this.dataSource = new MatTableDataSource<Project>(this.projects);
      });
  }
  edit(id: number) {
    this.projectService.getProject(id)
      .subscribe(data => {
        console.log(data);
      });
  }

}
