import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../api.service';

@Component({
  selector: "app-transaction",
  templateUrl: "transaction.component.html"
})
export class TransactionComponent implements OnInit {
 customerList;
 transactionStatus;
 transactionCustomerList: Array<any> = [];
 currentCustomer = this.apiService.getCustomerInfo();
 receiverID='';
 amount=0;

  constructor(private apiService: ApiService) {}


  ngOnInit() {
  this.apiService.getCustomerDetails().subscribe((data)=>{
            this.customerList = data;
            this.customerList.forEach(value => {
            if(this.currentCustomer.id !== value.id)
            {
              this.transactionCustomerList.push(value);
            }
            });
         });

  }

  public transactNow()
  {
     const data = {'senderId': this.currentCustomer.id, 'receiverId': this.receiverID, 'amount' : this.amount};
     this.apiService.saveTransaction(data).subscribe((result) =>{
     this.apiService.setTransactionStatus(result.status);
     this.transactionStatus=result.status;
     if(this.currentCustomer.balance > this.amount)
     {
      this.currentCustomer.balance=this.currentCustomer.balance-this.amount;
     }
     });

  }
}
