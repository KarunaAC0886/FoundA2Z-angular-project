import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage1Component } from './home-page1/home-page1.component';
import { HomePage2Component } from './home-page2/home-page2.component';
import { Header1Component } from './header1/header1.component';
import { OrderpaymentpageComponent } from './orderpaymentpage/orderpaymentpage.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomePageBooksComponent } from './home-page-books/home-page-books.component';
import { HomePageCosmeticsComponent } from './home-page-cosmetics/home-page-cosmetics.component';

const routes: Routes = [
  {path:'',component:HomePage1Component},
  {path:'page2',component:HomePage2Component},
  {path:'header',component:Header1Component},
  {path:'order',component:OrderpaymentpageComponent},
  {path:'ordersuccess',component:OrdersuccessComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'homepagebooks',component:HomePageBooksComponent},
  {path:'homepagecosmetics',component:HomePageCosmeticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
