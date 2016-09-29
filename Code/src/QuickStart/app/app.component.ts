import { Component } from "@angular/core";

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: "my-app",
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>Id: </label>{{hero.id}}</div>
      <div>
        <label for="nameInput">Name: </label>
        <input id="nameInput" [(ngModel)]="hero.name" placeholder="name"> 
      </div>
    `
})
export class AppComponent {
    title = "Tour of Heroes";
    hero: Hero = {
        id: 1,
        name: "windstorm"
    };
}

