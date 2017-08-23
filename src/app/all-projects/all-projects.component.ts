import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})

export class AllProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  projects: Project[] = [
    new Project("Creative Campfire Pie Iron Cookbook", "We're taking mountain pies, campfire pies, jaffles, and pudgie pies to a whole new level with our innovative pie iron cookbook!", "Pudgie Revolution 2", 5000, "Pudgie Revolution 2 is full of creative recipes that will push your pie iron's potential.  There are recipes that use unconventional crusts, like our Deep Pied Pickle which wraps up pickles and pepper jack cheese in egg roll  wrappers.  We also have recipes for irons of different shapes and sizes, like our bacon/maple/donut pudgie pie that fits perfectly in a round pie iron.  And we've truly pushed our pie iron's potential with recipes that use no crust at all, like our Thanks a Latke pudgie--a crispy and delicious potato pancake!", "Cookbooks", 0),

    new Project("Critical Chips 2", "A collection of contemporary comics essays on everything from Milestone to Woodstock romance, black girl magic to the Punisher", " Zainab Akhtar", 11500, "Hi, everyone! I'm really pleased and excited to announce that Critical Chips is back with a brand spanking new volume packed full of comics essays and criticism. Last year, with your support, we published the first volume of Critical Chips through Kickstarter, and it did pretty well: it was nominated for an Eisner award(!), but more gratifying than that was to be able to create the zine itself, and to see people respond to it with enthusiasm.", "Comics", 1),

    new Project("Kaksori!", "A feature documentary film about the traveling musicians of rural South Korea.", "Solano Film Collective", 15000, "Kaksori (“singing beggar”) is a popular folk tradition that has seen little documentation and now is in danger of dying out. Our film explores kaksori as a form of social critique and uses the performers’ stories as a key to explore the social reality of South Korea’s turbulent economic rise.", "Documentary", 2),
  ];



  ngOnInit() {
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects',clickedProject.id]);
  };
}
