# Notice from author

This project is a test task.
Its basis on Angular(NG10).
Language: en.

In this project, you can try to get data with current weather in some cities/villages.
When you type some name this app sends a request to https://openweathermap.org/. If the name is correct and the server has any information about the weather for it, the app adds this data to the table.

### Optionally:
1. You can delete some rows from the table by a separate button at the end of each row. This action deletes data only from this table.
2. You can save all information from the table to the local storage in your browser to get this information after some time. For this action, you can use the button "Save data locally".
3. you can clear all information from the local storage. For this action, you can use the button "Clear local storage". This action clears all new data also.

For testing this app online, go to [Weather App](https://vitaliimalynka.github.io/weather-app/).
### It's dev version. For test this project you need:
1. install Node.js from oficcial site https://nodejs.org/
2. install Angular-CLI: 
- open Search in Windows
- type cmd
- find Command Prompt
- use option "run as administrator"
- in cmd type "npm install -g @angular/cli" whitout "";
3. download this repository https://github.com/vitaliimalynka/weather-app/archive/master.zip;
4. unzip it in some folder. It will be easiest if unzip this project to root of disk C:\, for example, C:\weater-app-master;
5. open this folder in cmd:
- type "cd \"
- type "cd weater-app-master"
6. type "dir" and check that there is file 'angular.json'
7. type "npm i" for download necessary files;
8. type "dir" and check there is folder node_modules
9. start project (for example, type "ng serve -o");
10. start test project in browser (http://localhost:4200/)



## WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
