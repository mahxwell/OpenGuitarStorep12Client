import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {GuitarComponent} from './guitar/guitar.component';
import {RouterModule, Routes} from '@angular/router';
import {GuitarsComponent} from './guitars/guitars.component';
import {GuitarsService} from './services/guitars.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AccountmanagementComponent} from './accountmanagement/accountmanagement.component';
import {AddreviewComponent} from './guitar/addreview/addreview.component';
import {AccountmodifyComponent} from './accountmanagement/accountmodify/accountmodify.component';
import {GeneralmsgComponent} from './accountmanagement/generalmsg/generalmsg.component';
import {SearchComponent} from './header/search/search.component';
import {OrderComponent} from './order/order.component';
import {AddorderComponent} from './order/addorder/addorder.component';
import {ListorderComponent} from './order/listorder/listorder.component';
import {ReservationService} from './services/reservation.service';
import {OrderService} from './services/order.service';
import {ReviewService} from './services/review.service';
import { ReservationComponent } from './reservation/reservation.component';
import { AddreservationComponent } from './reservation/addreservation/addreservation.component';
import { ListreservationComponent } from './reservation/listreservation/listreservation.component';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'guitars', component: GuitarsComponent},
  {path: 'guitars/:id', component: GuitarComponent},
  {path: 'users', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'accountmanagement', component: AccountmanagementComponent},
  {path: 'accountmodify', component: AccountmodifyComponent},
  {path: 'generalmsg', component: GeneralmsgComponent},
  {path: 'addreviews', component: AddreviewComponent},
  {path: 'search', component: SearchComponent},
  {path: 'addorder', component: AddorderComponent},
  {path: 'listorder', component: ListorderComponent},
  {path: 'addreservation', component: AddreservationComponent},
  {path: 'listreservation', component: ListreservationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    GuitarComponent,
    GuitarsComponent,
    LoginComponent,
    RegisterComponent,
    AccountmanagementComponent,
    AddreviewComponent,
    AccountmodifyComponent,
    GeneralmsgComponent,
    SearchComponent,
    OrderComponent,
    AddorderComponent,
    ListorderComponent,
    ReservationComponent,
    AddreservationComponent,
    ListreservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, GuitarsService, AuthenticationService, ReservationService, OrderService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
