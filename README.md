# Setup
create api-keys.ts under the app folder, then enter the following in the file:

export var masterFirebaseConfig = {
  apiKey: "AIzaSyBoFCNfNEng70X-wv_RGR21yICWGNYi0Cw",
  authDomain: "fund-crowder.firebaseapp.com",
  databaseURL: "https://fund-crowder.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "625573928448"
};

# Steps we took

* $ ng new fund-crowder
* $ bower init
* add /bower_components to .gitignore
* $ bower install bootstrap --save
* add "../bower_components/bootstrap/dist/css/bootstrap.css" in the "styles" section of angular-cli.json.
* $ ng g component welcome (add new welcome component)
* Make app.routing.ts in the app folder "https://www.learnhowtoprogram.com/javascript/angular-extended/implementing-a-router"
* Add route files and any components to the root module "import { routing } from './app.routing';"
* Update root app component html: add <router-outlet></router-outlet>
* Make new component: About "https://www.learnhowtoprogram.com/javascript/angular-extended/managing-and-navigating-multiple-routes"
* Update routing for about component
* Update app.component html with nav bars with routerLink
* Create/add info into a Model - "https://www.learnhowtoprogram.com/javascript/angular-extended/dynamic-routing-navigation"
* $ ng g class project.model
* add code to list these albums in the all-projects.component.html template:
* Create project-detail component: $ ng g component project-detail
* Add route to app.routing.ts = {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }
* Add click event binding to the all-projects.component.html files
* Move constructor in all-projects.component.ts to reside within the export class above the projects
* Add code to retrieve parameters[id]:  "https://www.learnhowtoprogram.com/javascript/angular-extended/dynamic-routing-retrieving-parameters"
* Create mock-projects.ts file in app folder and move array of projects from all-projects to here so the service can manage it separately.
* In app-projects change projects: to projects: Project[];
* $ ng g service project.service - Create service that will be injected later.
* "https://www.learnhowtoprogram.com/javascript/angular-extended/services";
* Import model and mock-projects to project.service.ts
* Add getProject method to return project
* Import ProjectService to all-projects.component.ts
* Add private projectService: ProjectService to constructor
* Under component, add providers: [ProjectService]
* update project-detail-component to display project details
* Set up Firebase: https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup
* enter the following: $ npm install promise-polyfill --save-exact
* Create sample-projects.json with data from mock-projects.ts and import to firebase.
* update project.service.ts to retrieve data from firebase via instructions on https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-retrieving-data
* Add code to create and save a new project to firebase: "https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-saving-data"
* Remove ID numbers from mock-projects.ts
* Add code to edit projects: "https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-updating-entries"
* Add code to delete firebase entries - https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-deleting-entries
* add delete button to edit-album.component.html and backend code for same to edit-album.component.ts
* Create a fund project component using: $ ng g component fund-project
* Add "Fund It" button to the all-projects html file
* Create a category pipe: $ng g pipe category


# FundCrowder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
