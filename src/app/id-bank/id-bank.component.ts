import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-id-bank',
  templateUrl: './id-bank.component.html',
  styleUrls: ['./id-bank.component.css']
})
export class IdBankComponent {

  jsonData;
  id;

  label;
  description;
  date;
  balance;
  amount;


  constructor(private route: ActivatedRoute,
    private http: HttpClient) 
  {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //Get id form url

    this.http.get(`assets/data/${this.id}.json`).subscribe( //Get json file and loaded in jsonData
      (data: any) => {
        this.jsonData = data;
        console.log('Json loaded', this.jsonData);

        this.label = this.jsonData.label;
        this.date = this.jsonData.date;
        this.description = this.jsonData.description;
        this.balance = this.jsonData.balance;
        this.amount = this.jsonData.amount;

      },
      error => {
        console.error('Error loading json', error);
      }
    );
  }
}
