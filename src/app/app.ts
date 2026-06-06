import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Angular Tutorial";
  isAdmin = false;
  price = 199.99;
  count = 5;
  title = signal("Angular Tutorial Signal");
  getUser() {
    return "Syed Rzivi";
  }
  //protected readonly title = signal('angular-tutorial');
}
