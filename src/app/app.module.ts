import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloNameComponent } from './hello-name/hello-name.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatButtonModule} from '@angular/material/button';

import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageBankComponent } from './home-page-bank/home-page-bank.component';
import { BankHeaderComponent } from './bank-header/bank-header.component';
import { IdBankComponent } from './id-bank/id-bank.component';

import {MatTableModule} from '@angular/material/table';

import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HelloNameComponent,
    CalculatorComponent,
    HomePageComponent,
    HomePageBankComponent,
    BankHeaderComponent,
    IdBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ScrollingModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule, 
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
