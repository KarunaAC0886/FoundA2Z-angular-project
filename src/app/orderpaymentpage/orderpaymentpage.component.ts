import { Component,OnInit } from '@angular/core';
import { LocalserviceService } from '../localservice.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-orderpaymentpage',
  templateUrl: './orderpaymentpage.component.html',
  styleUrls: ['./orderpaymentpage.component.css']
})
export class OrderpaymentpageComponent implements OnInit{
  //getting data from service
iteminfo:any=[];
otp:any;
entercapta="";


currentnumber=1;
 
  
itemimage="https://rukminim2.flixcart.com/image/832/832/kthjy4w0/combo-kit/1/u/4/best-makeup-kit-combo-set-of-16-pcs-with-eyeshadow-eyeliner-original-imag6thgeu6hmyff.jpeg?q=70";

finalnumber:any;
customername="Karuna";
orderdate=new Date();


showcontainer:boolean=false;
ordersummary:boolean=true;
paymentpagebefore:boolean=true;
paymentmakingpage:boolean=false;
phonepecont:boolean=false;
enterupiid:boolean=false;
chooseupi:boolean=false;
choosecards:boolean=false;
choosenetbanking:boolean=false;
choosecashondelivery:boolean=false;
  priceofitems!: number;
  totalamount!:number;
 deliverycharges!:number;
 deliverydate = new Date();
//  seller="Regi India/Maxima Solutions";
//  productname="Glow Oil Control Compact SPF 30 for a Flawless Base 9g";
 
//  public  productdetails:Array<object>=[
//  {image:this.itemimage},
//  {price:this.totalamount},
//  {deliveryitems:this.currentnumber},
//  {seller:this.customername},
//  {orderdate:this.orderdate},
// //  {seller:this.seller},
// //  {prodname:this.productname}

//  ]

  itemprice!:number;
  constructor(private service:LocalserviceService, private root:Router){
    this.priceofitems=this.currentnumber*this.itemprice;
   
  this.deliverydate.setDate(this.deliverydate.getDate() + 2);
    // this.totalamount=this.priceofitems+40;
    
  }
  
  ngOnInit(): void {
     this.service.function().subscribe({
      next:data=>{
        this.iteminfo=data;
        console.log(data,"check");
      },
      error:err=>{
        console.log(err,"eror");

      }
     })
    // console.log(this.iteminfo);
    this.totalcalculation();
    
       
    
  }
  cancel(){
    this.service.delete();
    this.root.navigate(['']);  
  }
  buymore(){
    this.root.navigate(['']);  
  }
  totalcalculation(){
   if(this.iteminfo){
    const itemdescription = parseInt(this.iteminfo[0].Price);
   
    this.priceofitems=this.currentnumber*itemdescription;
   
    if(this.priceofitems<=500){
      this.deliverycharges=40;
      this.totalamount=this.priceofitems+this.deliverycharges;
          }else if(this.priceofitems>500){
            this.deliverycharges=0;
            this.totalamount=this.priceofitems+this.deliverycharges;
          }
        }
  }
  
  decrease(){
    if(this.currentnumber>1){
      this.currentnumber--;
      this.priceofitems=this.currentnumber*this.itemprice;
      this.totalcalculation();
      // this.totalamount=this.priceofitems+this.deliverycharges;
    }
    
    
  }
  myvaluechange(){
    this.totalamount=this.priceofitems+40;
  }
  increase(){
this.currentnumber++;
this.priceofitems=this.currentnumber*this.itemprice;
this.totalcalculation();
// this.totalamount=this.priceofitems+this.deliverycharges;
  }

  hide(){
  this.showcontainer=!this.showcontainer;
  this.ordersummary=false;
  this.paymentpagebefore=!this.paymentpagebefore;
  this.paymentmakingpage=!this.paymentmakingpage;

  }
  hideprevious(){
this.ordersummary=!this.ordersummary;
this.showcontainer=!this.showcontainer;
this.paymentmakingpage=false;
this.paymentpagebefore=true;

  }
  upi(){
    this.chooseupi=!this.chooseupi;
    this.choosecards=false;
    this.choosenetbanking=false;
    this.choosecashondelivery=false;
  }
  phonepay(){
    this.phonepecont=!this.phonepecont;
    this.enterupiid=false;
  }
  upigoogle(){
this.enterupiid=!this.enterupiid;
this.phonepecont=false;
  }
  cards(){
this.choosecards=!this.choosecards;
this.chooseupi=false;
this.choosenetbanking=false;
this.choosecashondelivery=false;
  }
  netbnk(){
    this.chooseupi=false;
    this.choosecards=false;
    this.choosecashondelivery=false;
    this.choosenetbanking=!this.choosenetbanking;
 }
 cashondelivery(){
  this.chooseupi=false;
    this.choosecards=false;
    this.choosenetbanking=false;
    this.choosecashondelivery=!this.choosecashondelivery;
    this.genereateotp();
 }
 genereateotp(){
  const length=3;
  const charset='012ABCDFGHIjklmMnNOoP9';
  let result="";
  for(let i=0;i<length;i++){
const randomIndex=Math.floor(Math.random()*charset.length);
result+=charset[randomIndex];
  }
  this.otp= result;
 }
 codprocess(){
    const mydata=[
    {Total:this.totalamount},
    {Quantity:this.currentnumber}
  ];
  this.service.gettingdatafrompayment(mydata);

  if(this.otp==this.entercapta){
    
alert('Order Placed Successfully');
this.root.navigate(['/ordersuccess']);

  }else{
    alert('Invalid Capta');
  }
 }
  mydata(mydata: any) {
    throw new Error('Method not implemented.');
  }

}

