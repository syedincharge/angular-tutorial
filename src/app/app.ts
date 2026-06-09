import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
  
  
export class App {
  name: string = "";
  city: string = "";
  email: string = "";

  updateName(val: string) {
    this.name = val;
    console.log(val);
  }

  getEmail(val: string) {
    this.email = val;
    console.log(val);
  }
}

