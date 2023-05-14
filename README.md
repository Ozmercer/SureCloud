# Notes
Please see my solution for this test.
As requested, I have not installed (almost) any extra libraries. I was planning to upgrade Angular to its latest version, 
but I wasn't sure if this was also not allowed so I kept it on version 12. I did however install prettier to help with my 
code reformatting, however this has no affect on the functionality of the app.

The Styles are inspired by the Figma file attached, however the design could not be identical due to the images from the 
endpoint being in a very wide range of dimensions. I decided it would be better to tweak with the designs rather than have 
morphed images, so I took some liberty to make adjustments to the styles. 
I also added some breakpoints to the styles to make the app slightly more responsive.

I also thought it would be nice if clicking on the gallery would open the full-sized image, so I added that functionality, 
despite it not being part of the task.

Please notice that I have also added unit tests for the components. I generally write tests with the help of the 3rd party 
library "Spectator", but since it was asked not to install any further libraries I used the default Jasmine syntax. 

I hope you are happy with the result!

# Instructions
Please find instructions [here](./instructions/TEST-INSTRUCTIONS.md)

# DogLibraryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
