import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectDetailComponent }   from './project-detail/project-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { FundProjectComponent } from './fund-project/fund-project.component';

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
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'fund-project',
    component: FundProjectComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
