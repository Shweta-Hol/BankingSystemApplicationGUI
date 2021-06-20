import { Injectable,Input } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
transactionStatusList : Array<any> = [];
transactionStatus='';
customerInfo;
  constructor(private httpClient: HttpClient) { }

   public getCustomerDetails(){
    return this.httpClient.get(`https://bankingsystemapplication.herokuapp.com/getCustomerDetails`);
  }
  public getTransactionDetails(customerInfo)
  {
  const headers = new HttpHeaders().append('header', 'value');
  const params = new HttpParams().append('sender', this.customerInfo.id);
  return this.httpClient.get(`https://bankingsystemapplication.herokuapp.com/getTransactionHistory`,{ headers: headers, params: params });
  }

  public getTransactionCustomerList(customerInfo)
  {
  const headers = new HttpHeaders().append('header', 'value');
  const params = new HttpParams().append('sender', this.customerInfo.id);
  return this.httpClient.get(`https://bankingsystemapplication.herokuapp.com/getTransactionCustomerList`,{ headers: headers, params: params });
  }

  public saveTransaction(data)
  {
  const headers = new HttpHeaders().append('header', 'value');
  return this.httpClient.put<any>('https://bankingsystemapplication.herokuapp.com/updateTransaction', data);
  }

public addStatus()
{
if(this.transactionStatus !== '' && this.transactionStatus !== 'undefined')
  this.transactionStatusList.push(this.transactionStatus);
}
   setCustomerInfo(val) {
      this.customerInfo = val;
    }

    getCustomerInfo():any{
      return this.customerInfo;
    }

    setTransactionStatus(val) {
          this.transactionStatus = val;
    }
   getTransactionStatus():any{
          return this.transactionStatus;
   }


    setTransactionStatusList(val) {
             this.transactionStatusList = val;
       }
      getTransactionStatusList():any{
             return this.transactionStatusList;
      }
}

