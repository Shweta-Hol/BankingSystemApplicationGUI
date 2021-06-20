import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  customerList;
  currentCustomer;
  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit() {
  this.apiService.getCustomerDetails().subscribe((data)=>{
        console.log(data);
        this.customerList = data;
      });

  }
 public selectCustomer(customer: any) : void {

     this.currentCustomer = customer;
     console.log(this.currentCustomer);
     this.apiService.setCustomerInfo(this.currentCustomer);
     console.log(this.apiService.getCustomerInfo());
      this.router.navigateByUrl('/user');
   }

 }

