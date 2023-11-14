import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-hello-name',
  templateUrl: './hello-name.component.html',
  styleUrls: ['./hello-name.component.css'],
})


export class HelloNameComponent {

  name = "...";
  align;
  font;
  size = "20";
  
  onKey(event) { //Update text every key typed
    this.name = event.target.value.toUpperCase();
  }

  changeAlign(event) {
    this.align=event.value;
  }

  changeFont(event) {
    this.font=event.value;
  }

  changeSize(event) {
    this.size = event.target.value;
  }

  

}
