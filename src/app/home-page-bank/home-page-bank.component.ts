import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: string;
}

@Component({
  selector: 'app-home-page-bank',
  templateUrl: './home-page-bank.component.html',
  styleUrls: ['./home-page-bank.component.css']
})
export class HomePageBankComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  dataSource = new MatTableDataSource<Transaction>();

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private http: HttpClient
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadData();
  }

  loadData() { //Load data from json with http
    this.http.get('assets/data/transactions.json').subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          this.dataSource.data = data;
        } else {
          console.error('JsonData not an array', data);
        }
      },
      error => {
        console.error('Error loading data', error);
      }
    );
  }

  sortData(event) { //Sort Data
    if (event.direction) {
      this._liveAnnouncer.announce(`Sorted ${event.direction}ending`);
      this.dataSource.sort = this.sort;
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
      this.dataSource.sort = null;
    }
  }

  loadIndexWeb(id) { //Load new web sending the id of the transaction for later use
    this.router.navigate(['/idBank', id]);
  }
}
