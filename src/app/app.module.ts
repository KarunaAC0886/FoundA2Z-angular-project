import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage1Component } from './home-page1/home-page1.component';
import { HomePage2Component } from './home-page2/home-page2.component';
import { LocalserviceService } from './localservice.service';
import {HttpClientModule} from '@angular/common/http';
import { Header1Component } from './header1/header1.component';
import { CurrencyPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderpaymentpageComponent } from './orderpaymentpage/orderpaymentpage.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageBooksComponent } from './home-page-books/home-page-books.component';
import { HomePageCosmeticsComponent } from './home-page-cosmetics/home-page-cosmetics.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePage1Component,
        HomePage2Component,
        OrderpaymentpageComponent,
        OrdersuccessComponent,
        CalendarComponent,
        Header1Component,
        HomePageBooksComponent,
        HomePageCosmeticsComponent
    ],
    providers: [LocalserviceService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CurrencyPipe,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
        HeaderComponent,
        BrowserAnimationsModule,
  
    ]
})
export class AppModule { }
