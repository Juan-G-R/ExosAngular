import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  num1;
  num2;
  result;
  opertator;

  operationHistoricalString = "";

  changeNum1(event) {
    this.num1 = +event.target.value;

  }
  changeNum2(event) {
    this.num2 = +event.target.value;
  }

  changeOperation(event) {
    this.opertator = event.value;
  }

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) { //SnackBar generator
    this.snackBar.open(message, action, {
      duration: 3000, 
    });
  }

  calculeResult() {

    if(this.num1 !== undefined && this.num2 !== undefined && this.opertator !== undefined){ //Check if all fields are complete
      if(this.num1.toString().length <= 5 && this.num2.toString().length <= 5){ //Check for max lenght
        switch (this.opertator) {
          case "+": {
            this.result = (this.num1 + this.num2).toString();
            break;
          }
          case "-": {
            this.result = (this.num1 - this.num2).toString();
            break;
          }
          case "*": {
            this.result = (this.num1 * this.num2).toString();
            break;
          }
          case "/": {
            this.result = (this.num1 / this.num2).toString();
            break;
          }
          default: {
            break;
          }
    
        }
        this.writeData();
      }else{
        this.openSnackBar('Numbers are to loong please max 5 chars', 'Close'); 
      }

    }else{
      this.openSnackBar('Please complete all fields', 'Close');
    }


  }
  


  historyList: any[] = [];

  writeData() { //Writes data to the historical

    const date = new Date();

    const timeStamp = date.getHours() + ":" + date.getMinutes();

    this.operationHistoricalString = "[" + timeStamp + "] " + this.num1 + " " + this.opertator + " " + this.num2 + " = " + this.result + "\n";

    this.historyList = [...this.historyList, this.operationHistoricalString];

  }

  removeData(item){ //Remove data of the historical
    const index = this.historyList.indexOf(item);
    if (index !== -1) {
      this.historyList.splice(index, 1);
      this.historyList = [...this.historyList];
    }
  }



}
