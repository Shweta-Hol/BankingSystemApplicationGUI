import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  user = this.apiService.getCustomerInfo();
  transactionHistoryDetails;
  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit() {
     this.apiService.getTransactionDetails(this.user).subscribe((data)=>{
        console.log(data);
        this.transactionHistoryDetails = data;
      });

  }

}
