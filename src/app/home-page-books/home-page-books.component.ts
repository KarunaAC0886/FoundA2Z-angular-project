import { Component,OnInit,OnDestroy } from '@angular/core';
import { LocalserviceService } from '../localservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page-books',
  templateUrl: './home-page-books.component.html',
  styleUrls: ['./home-page-books.component.css']
})
export class HomePageBooksComponent implements OnInit,OnDestroy {
  public futureDate:Date;
  stationery:any=[];
  item: any;
    constructor(private service:LocalserviceService,private root:Router){
      this.futureDate = new Date();
      this.futureDate.setDate(this.futureDate.getDate() + 2);
    }
    ngOnDestroy(): void {
      // this.service.delete();
     }
     
    
    
   ngOnInit(): void {
     
    this.service.function().subscribe((data: any)=>{
    this.stationery=data;
    console.log(data);
    })
    
   }
   sendinfo(){
    // this.service.getdatafromhome2(data);
    this.root.navigate(["/order"]);
   }
}
