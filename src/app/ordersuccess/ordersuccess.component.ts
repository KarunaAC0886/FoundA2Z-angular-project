import { Component,OnInit } from '@angular/core';
import { LocalserviceService } from '../localservice.service';


@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit{
  rangeselect="";
  productinfo:any=[];
  approval:boolean=true;
  process:boolean=false;
  shipping:boolean=false;
  delivery:boolean=true;
  selectdate=new Date();
  today=new Date();
  orderID:any;
  ordered11: any;
  constructor(private service:LocalserviceService){
    this.selectdate.setDate(this.selectdate.getDate()+2);
  }
  ngOnInit(): void {
    this.rangeselect;

    this.service.function().subscribe(data=>{
    this.productinfo=data;
    })
    this.service.function3().subscribe(data1=>{
      this.ordered11=data1;
      // console.log(JSON.stringify(this.ordered11));
    })
    
   
    
    this.genereateotp();
  }
  

  selceting(){
if(this.rangeselect=="50"){
  this.process=true;
}else if(this.rangeselect=="100"){
this.shipping=true;
}
  }

  genereateotp(){
    const length=14;
    const charset='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result="";
    for(let i=0;i<length;i++){
  const randomIndex=Math.floor(Math.random()*charset.length);
  result+=charset[randomIndex];
    }
    this.orderID= result;
   }
}
