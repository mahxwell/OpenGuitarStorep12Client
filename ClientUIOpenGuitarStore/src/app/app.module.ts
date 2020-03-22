import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuitarComponent } from './guitar/guitar.component';
import {RouterModule, Routes} from '@angular/router';
import { GuitarsComponent } from './guitars/guitars.component';
import {GuitarsService} from './services/guitars.service';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'guitars', component: GuitarsComponent},
  { path: 'guitars/:id', component: GuitarComponent},
  { path: 'users', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    GuitarComponent,
    GuitarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, GuitarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
