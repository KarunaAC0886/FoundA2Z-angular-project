import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LocalserviceService  {

   public itemdetails: any=[];
   orderdata: BehaviorSubject<any> = new BehaviorSubject<any>([]);
   
   public selected= new BehaviorSubject<any>([]);
   public selected2= new BehaviorSubject<any>([]);

   //home2 info
   public data1:any=[];

  //  public select= new BehaviorSubject<any>([]);

  //  public select=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  
  //getting data from postman
  getPostmanData(): Observable<any> {
    const apiUrl ="https://0b9837f7-498a-47a2-88e9-1e747b2b5dd1.mock.pstmn.io/stationery";

    return this.http.get(apiUrl);
  }
 getPostmanData1(): Observable<any>{
  const apiUrl2="https://0b9837f7-498a-47a2-88e9-1e747b2b5dd1.mock.pstmn.io/books"
  return this.http.get(apiUrl2);
 }
 getPostmanData2(): Observable<any>{
  const apiUrl3="https://0b9837f7-498a-47a2-88e9-1e747b2b5dd1.mock.pstmn.io/cosmetics"
  return this.http.get(apiUrl3);
 }
 //getting data from homepage1 component
 getstationery(data: any){
  this.itemdetails.push(data);
  this.selected.next(this.itemdetails);
  this.selected2.next(this.itemdetails);

 }
 getdatafromhome2(data:any){
this.data1= data;

 }
 gettingdatafrompayment(dataorder:any[]){
this.orderdata.next(dataorder);
 }
  
//sending data to another components
function(){
  
    return this.selected.asObservable();
  
   }
   function3(){
  
    return this.orderdata;
  
   }
 delete(){
  this.itemdetails.pop();
 }  
 function2(){
  return this.data1;

 }
 
  
 
}
