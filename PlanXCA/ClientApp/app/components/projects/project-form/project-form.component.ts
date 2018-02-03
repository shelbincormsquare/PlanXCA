import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;
  title: string;
  project: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
console.log(id);
      this.title = id ? 'Edit User' : 'New User';

      if (!id)
        return;

      this.projectService.getProject(id)
        .subscribe(
          project => this.project = project,
          response => {
            if (response.status == 404) {
              //this.router.navigate(['NotFound']);
            }
          });
    });
  }

}
