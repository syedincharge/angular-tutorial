import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count = 0;

  handleClick() {
    let abc = "Hi Function";
    console.log("Button Click", abc);
    this.helloFunction();
  }
  helloFunction() {
    console.log("Hello Function");
  }
}
