# Getting started
Make sure you have the Angular CLI installed globally. 

* Make sure to be ubicated in the directory with the code of the frontend in the console. the execute:
`ng serve`

# Todolist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## The general page breakdown looks like this
* List of all users (GET): (localhost:3000/user?since=1)
* Create a new user (POST): (localhost:3000/user)
* Update an user (PUT): (localhost:3000/user/:id)
* Search users (GET): (localhost:3000/search/colection/users/:search)
* Search an user by ID (GET): (localhost:3000/task/:id)
* Create task (POST): (localhost:3000/task/)
* Update task (PUT): (localhost:3000/task/:id)
* Search task (GET): (http://localhost:3000/search/colection/tasks/:search)




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
