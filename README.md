## Angular2Tutorials
# Notes on using this project with the Angular tutorial

This project is an [ASP.NET Core](http://www.asp.net/core) port of the [Angular 2 QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html) tutorial. This file describes how I created the Core project while following the tutorial.

To follow this tutorial you must have `Node.js` and `npm` installed, working, and in your PATH. You can find out how to do this nearly anywhere. Knowing TypeScript is not necessary, as the tutorial has some basic explanations, but I highly recommend further study of TypeScript. You should also have a rudimentary knowledge of how to use `npm`.

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

I did the following:

1. Replaced `typings.json` with one that worked, that I found somewhere I don't recall. The one from the tutorial was causing compile errors for TypeScript files.
2. Created the folder `wwwroot/css` for `stylings.css`. Very often this folder is created by [Gulp](http://gulpjs.com/) when it copies CSS files, or e.g. gets LESS files compiled into CSS.
3. Added the `gulpfile.js` script to copy all JavaScript files referenced in `index.html` into `wwwroot/js`.
4. Updated the paths for script references `index.html` to use files inside `wwwroot/js`.
5. Replaced `systemjs.config.js`, `tsconfig.json`, `typings.json` with those now in project to get `tsc`, the TypeScript compiler, working properly.

#### Static Files

ASP.NET Core will, by default, not serve any static files at all, from any folder in the web site. To get it to serve static files from its default `wwwroot` folder, I had to add the line `"Microsoft.AspNetCore.StaticFiles":  "1.0.0"` to the `dependencies` node of `project.json`, and then:

- Delete the little Hello world thing and add all code now in `Startup.cs`.

#### Gulp

I added `gulpfile.js` to help copy the compiled JavaScript from compiled TypeScript, and other JavaScript from the `node_modules` folder, to the following folders:

`wwwroot/app`
`wwwroot/js`
`app/js`

To get Gulp to work, I had to add the following npm packages:

- "del": "^2.2.2"
- "gulp": "^3.9.1"
- "gulp-delete-file": "^1.0.2"
- "r.js": "^1.0.3"
- "requirejs": "^2.3.2"

#### Misc

The `web.config` file created by the project template includes a tag named `aspNetCore`. The compiler doesn't recognise this because it isn't in the oudated schema for `web.config` that VS still uses. I created a new schema based on the project's `web.config`, which then includes `aspNetCore`.

You will have to add the `web.xsd` file to the schemas for `web.config` in your Visual Studio. Do so by

1. Open `web.config` as if for editing.
2. Right click anywhere in the editor pane, then click on "Properties" at the bottom of the context menu.
3. Add the string `web.xsd` to the list of XML schemas that appears when you click the `schemas` property.

### What Next?

I will be forking this project to extend it by following Angular's next tutorial, [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/), and blogging about how that all works.

You can use this project as is to experiment with Angular 2 and TypeScript, if you just stick to the following guidelines for now:

1. Keep all your TypeScript work in the `app` folder in the root of the project, not `wwwroot/app`. If you place it there, it could well be deleted when you build.
2. Keep all regular JavaScript, not compiled TypeScript, in the `wwwroot/js` folder, or a sub-folder, and reference it from there.

These are not commandments, and if you feel like experimenting with other areas of the project, go ahead. Just always branch before you do, or, if you're a sinner and not using source control, at least make a backup. At worst you can clone this repo again and start from scratch.
