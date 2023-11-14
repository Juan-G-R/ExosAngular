import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HelloNameComponent } from './hello-name/hello-name.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BankHeaderComponent } from './bank-header/bank-header.component';
import { HomePageBankComponent } from './home-page-bank/home-page-bank.component';
import { IdBankComponent } from './id-bank/id-bank.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'helloName', component:  HelloNameComponent},
  { path: 'calculator', component:  CalculatorComponent},
  { path: 'homeBank', component:  HomePageBankComponent},
  { path: 'idBank/:id', component:  IdBankComponent}, //Configure route for sending id in the url
  { path: 'special-header', component: BankHeaderComponent }, //Configure route for sharing header

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
