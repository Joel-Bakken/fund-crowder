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
