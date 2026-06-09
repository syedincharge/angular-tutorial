import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  status: string = "processing";
  isLoggedIn = true;
  marks = 72;
  showBox = true;
  section = "home";
  toggleBox() {
    this.showBox = !this.showBox;
  }

  age: number = 0;

  updateAge(val: string) {
    this.age = Number(val);
    console.log(val);
  }

}

