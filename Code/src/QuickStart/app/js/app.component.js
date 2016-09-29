"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
class Hero {
}
exports.Hero = Hero;
let AppComponent = class AppComponent {
    constructor() {
        this.title = "Tour of Heroes";
        this.hero = {
            id: 1,
            name: "windstorm"
        };
    }
};
AppComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
