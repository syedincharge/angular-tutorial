import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   //value = 10;
 //value = "Imtiaz";
  
  //name: number | string = "Syed Imtiaz Rizvi";
  name: number | string = 20;
  age:number = 35;
  isValid: boolean = true;
  

  handleClick() {

    let value;
    value = 10;
    value = "Syed";

    console.log(value);

  }

  sum(a: number, b: number) {
    console.log(a + b);
     return a + b;
  }

  clickHandle() {
    console.log('Button Clicked');
  }

  onTyping(event: any) {
    console.log("Typed : ",event.target.value);
  }

  onKeyUp(event: any) {
    console.log('Key Up Event', event.key);
  }

  onHover() {
    console.log('Hover Event');
  }
  onLeave() {
    console.log('Mouse Leave');
  }

  onBlur() {
    console.log('Blur Event');
  }

    onFocus() {
    console.log('Focus Event');
  }
}
