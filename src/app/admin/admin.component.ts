import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, manager: string, amount: number, content: string, amountfunded: number, category: string) {
    var newProject: Project = new Project(name, description, manager, amount, content, amountfunded, category);
    this.projectService.addProject(newProject);

  }
}
