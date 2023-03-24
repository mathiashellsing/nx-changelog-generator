import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

interface Migration {
  version: string;
  description: string;
  cli: string;
  implementation?: string;
  package: string;
  name: string;
  factory?: string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  migrations: Migration[];
}

bootstrapApplication(App);
