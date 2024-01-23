import { Component ,OnInit,OnDestroy} from '@angular/core';
import { LocalserviceService } from '../localservice.service';
import { Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home-page1',
  templateUrl: './home-page1.component.html',
  styleUrls: ['./home-page1.component.css']
})
export class HomePage1Component implements OnInit,OnDestroy {
  itemdetails2: any;
  itemdetails3:any;
  header1:boolean=false;
  beforelogin:boolean=true;
  constructor(private myservice:LocalserviceService,private root:Router,public dialog: MatDialog){}
  ngOnDestroy(): void {
    // this.myservice.delete();
  }

  itemdetails:any;
  ngOnInit(): void {
   this.myservice.getPostmanData().subscribe(data=>{
    this.itemdetails= data;
    //  console.log(this.itemdetails)
   })
   

   this.myservice.getPostmanData1().subscribe(data2=>{
    this.itemdetails2=data2;
    // console.log(this.itemdetails2);
   })
   this.myservice.getPostmanData2().subscribe(data3=>{
    this.itemdetails3=data3;
    // console.log(this.itemdetails3);
   })
   
  }
  
  itemimage="../../assets/stationery.webp";
  itemimage2="../../assets/books.webp";
  itemimage3="../../assets/cosmetics.webp";
  items="stationery";
  itemname="Stationery";
  itemname2="Books";
  itemname3="Cosmetics";
  advertise="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/a80893b88f1b9368.png?q=50";
  advertise2="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/d7172e66069190ad.png?q=50";
  advertise3="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/534fcf0a58f2958d.jpg?q=50";
  
  senditem(data:any){
    this.root.navigate(['/page2']);
    return this.myservice.getstationery(data);
  }
  sendbooks(data:any){
    this.root.navigate(['/homepagebooks']);
    return this.myservice.getstationery(data);
  }
  sendcosmetics(data:any){
    this.root.navigate(['/homepagecosmetics']);
    return this.myservice.getstationery(data);
  }
  // sendingstationery(data:any){
  //   return this.myservice.itemdetails;
  // }
  logo="../../assets/logos.jpg";
  

  openDialog(): void {
    this.dialog.open(HeaderComponent, {
      width: '950px',
      height: '450px',
      
    });
  }

}

