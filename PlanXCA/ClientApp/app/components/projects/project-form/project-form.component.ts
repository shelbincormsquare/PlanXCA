import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';
import { FormGroup } from '@angular/forms';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  title: string;
  project: Project;
  form: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService) {
    this.project = new Project();
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.title = id ? 'Edit User' : 'New User';

      if (!id)
        return;

      this.projectService.getProject(id)
        .subscribe(
          project => this.project = project,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  download() {

    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }

  save() {
    // var result,
    //   userValue = this.form.value;

    console.log("userValue");
  }

}
