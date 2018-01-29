import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  private readonly projectsEndpoint = '/api/projects';
  constructor(private http: Http) { }

  getProjects() {
    return this.http.get(this.projectsEndpoint).map(res => res.json());
  }

  // getProject(id) {
  //   return this.http.get(this.projectsEndpoint + '/' + id)
  //     .map(res => res.json());
  // }

  // create(project) {
  //   return this.http.post(this.projectsEndpoint, project)
  //     .map(res => res.json());
  // }

  // update(project: Project) {
  //   return this.http.put(this.projectsEndpoint + '/' + project.id, project)
  //     .map(res => res.json());
  // }

  // delete(id) {
  //   return this.http.delete(this.projectsEndpoint + '/' + id)
  //     .map(res => res.json());
  // }
}
