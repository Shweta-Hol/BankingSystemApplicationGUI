import { Component, OnInit } from "@angular/core";

import { ApiService } from '../../api.service';


@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;
  statusList : Array<any> = [];

  constructor(private apiService: ApiService) {}


  ngOnInit() {
  this.apiService.addStatus();
  this.statusList= this.apiService.getTransactionStatusList();

  }
}
