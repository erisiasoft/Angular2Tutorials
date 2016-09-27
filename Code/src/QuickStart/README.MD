# Notes on using this project with the Angular tutorial

This project is a .NET Core port of the [Angular 2 QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html) tutorial. This file describes creating the Core project while following the tutorial, and then some not-so-fine tuning to make it work.

To follow this tutorial you must have `Node.js` and `npm` installed, working, and in your PATH. You can find out how to do this nearly anywhere. Knowing TypeScript is not necessary, as the tutorial has some basic explanations, but I highly recommend further study of TypeScript.

### Using `npm`

You can use `npm` from:

- The Nuget Package Manager Console.
- PowerShell.
- The old fashioned Windows Command Prompt.

But you must ensure that the active directory for any of these consoles is the root directory of the project.

I prefer PowerShell outside of Visual Studio, as it seems more stable than the NuGet console at staying in the directory you want.

### Following the Tutorial

1. The tutorial starts with Step 1, where you create four basic files that most Angular 2 TypeScript applications need. These are `package.json`, `tsconfig.json`, `typings.json`, and `systemjs.config.js`. These files are already included in this project. Skip the instructions with `npm install` or `npm run`, as I have already taken care of this, but do read about what these files do.
2. Steps 2 to 4 tell you to create a folder called `app` in the root of your project, and create three TypeScript files in that folder, being `app.module.ts`, `app.component.ts`, and `main.ts`. This root `app` folder and these three files already exist in this project. Read these sections of the tutorial carefully to get a good understanding of what these files do, and some TypeScript fundamentals. 
3. **NB** Don't confuse this `app` folder in the project root with the `app` folder inside the `wwwroot` folder. The `wwwroot/app` folder is where the JavaScript files produced by the TypeScript compiler get copied to. You should notice all the .js files here have the same base names as the TypeScript files in the root `app` folder. You can delete these and they will magically reappear when you build the project again.
4. Step 5 details adding the app's default page, `index.html`, and a very basic stylesheet, `styles.css`. These are also already included in the project, but, again, read the tutorial carefully even for these basic steps.
5. You should not follow Step 6 to start the application, but it might work even in the .NET project. 

### Making it Work

New typings.json, up to date, from who knows where.
Manually added wwwroot/css for stylings.css. Normally use gulp for LESS.
Updated reference folders in Index.html to use files inside wwwroot.

Updated `package.json`. Added
- "del": "^2.2.2"
- "gulp": "^3.9.1"
- "gulp-delete-file": "^1.0.2"
- "r.js": "^1.0.3"
- "requirejs": "^2.3.2"

Removed
- "lite-server": "^2.2.2"

Run `npm install` after changing `package.json`.

Replaced `systemjs.config.js`, `tsconfig.json`, `typings.json` with those now in project to get `tsc` working properly.

#### Static Files
1. Added `"Microsoft.AspNetCore.StaticFiles":  "1.0.0"` to `dependencies` node of `project.json`.
2. Deleted Hello world and added all code in `Startup.cs`.

### Magic folders and GulFile

wwwroot/app
wwwroot/js
app/js

#### Misc

web.xsd
