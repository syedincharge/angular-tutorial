import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count: number = 0;

  // handleAdd(){
  //   this.count++;
  // }
  // handleMinus() {
  //   if(this.count > 0){
  //       this.count--;
  //   }
   
  // }
  // handleReset() {
  //   this.count = 0;
  // }


  handleCounter(value: string) {
    if (value === 'plus') {
      this.count++;
    }
    else if (value === 'minus' && this.count > 0) { 
      this.count--;
    }
    else if (value === 'reset') {
      this.count = 0;
    }  
  } 
}
