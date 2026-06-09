import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = true;
  marks = 65;
  showBox = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }

  age = 0;

  updateAge(val: string) {
    this.age = Number(val);
    console.log(val);
  }

}

