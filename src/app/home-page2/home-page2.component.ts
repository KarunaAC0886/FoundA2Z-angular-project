import { Component, OnInit ,OnDestroy} from '@angular/core';
import { LocalserviceService } from '../localservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page2',
  templateUrl: './home-page2.component.html',
  styleUrls: ['./home-page2.component.css']
})
export class HomePage2Component implements OnInit, OnDestroy {
  public futureDate:Date;
stationery:any=[];

  constructor(private service:LocalserviceService,private root:Router){
    this.futureDate = new Date();
    this.futureDate.setDate(this.futureDate.getDate() + 2);
  }
  ngOnDestroy(): void {
    // this.service.delete();
   }
   
  
  
 ngOnInit(): void {
   
  this.service.function().subscribe(data=>{
  this.stationery=data;

  })
  
 }
 sendinfo(data:any){
 
  this.service.getdatafromhome2(data);
  console.log(data+"Hi good morning");
  this.root.navigate(["/order"]);
  
}
 
}
