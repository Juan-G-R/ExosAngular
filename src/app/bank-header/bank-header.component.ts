import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-header',
  templateUrl: './bank-header.component.html',
  styleUrls: ['./bank-header.component.css']
})
export class BankHeaderComponent {
  
  time // global variable for string interpolation on html

  constructor(){
    setInterval(() => {
      this.time = new Date();
   }, 1000);

  }
}
