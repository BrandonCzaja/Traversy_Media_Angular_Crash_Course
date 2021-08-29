import { Component } from '@angular/core'; // Every Angular component requires this

// Component Declaration
@Component({
  selector: 'app-root', // Selector is the tag (html tag) that you will use to embed your component. I think like parent component
  templateUrl: './app.component.html', // HTML File that you are using
  styleUrls: ['./app.component.css'], // Styles, can have more than one
})

// Properties and methods go in this class. Kind of like React class-based components
export class AppComponent {}
