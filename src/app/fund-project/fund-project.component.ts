import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css'],
  providers: [ProjectService]
})
export class FundProjectComponent implements OnInit {
  @Input() project;


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  // beginFundingProject(projectToFund) {
  //   if(confirm("Are you sure you want to fund this project?")) {
  //     this.projectService.fundProject( ,projectToFund);
  //   }
  // }
}
