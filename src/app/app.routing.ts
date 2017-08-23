import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'all-projects',
    component: AllProjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
