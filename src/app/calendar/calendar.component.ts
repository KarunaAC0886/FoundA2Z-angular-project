import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  try=false;
  body={
    Name:"",
    Date:[],
    Title:"",
    StartTime:[],
    EndTime:[]
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins:  [dayGridPlugin]
  };
  btnSubmit(){   
    this.try=true;
  }
}
