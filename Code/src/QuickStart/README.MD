# Notes on using this project with the Angular tutorial

This project is a .NET Core port of the [Angular 2 QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html) tutorial. This file describes creating the Core project while following the tutorial, and then some not-so-fine tuning to make it work.

To follow this tutorial you must have Node.js and npm installed, working, and in your PATH. You can find out how to do this nearly anywhere. Knowing TypeScript is not necessary, as the tutorial has some basic explanations, but I highly recommend further study of TypeScript.

### Following the Tutorial

1. The tutorial starts with Step 1, where you create four basic files that most Angular 2 TypeScript applications need. These are **package.json**, **tsconfig.json**, **typings.json**, and **systemjs.config.js**. These files are already included in this project.
2. Steps 2 to 4 tell you to create a folder called `app` in the root of your project, and create three TypeScript files in that folder, being `app.module.ts`, `app.component.ts`, and `main.ts`. Read these sections of the tutorial carefully to get a good understanding of what these files do, and some TypeScript fundamentals. The root `app` folder and these three files already exist in this project. 
3. **NB** Don't confuse this `app` folder in the project root with the `app` folder inside the `wwwroot` folder. This folder is where the JavaScript files produced by the TypeScript compiler get copied to. You should notice all the .js files here have the same base names as the TypeScript files in the root `app` folder.