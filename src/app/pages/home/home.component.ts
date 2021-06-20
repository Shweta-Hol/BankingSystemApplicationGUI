import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  constructor() {}
 public imagesUrl;
  ngOnInit() {
  this.imagesUrl = ['assets/img/bank-handshake.jpg','assets/img/Transfer.jpg','assets/img/Save.jpg'];
  }
  public updateOptions() {

  }
}
