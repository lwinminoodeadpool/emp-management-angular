import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {ServerServices} from './home/server.serves';
import { AddempComponent } from './addemp/addemp.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NaviComponent,
    HomeComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'viewemp', component: HomeComponent},
      { path: 'addemp', component: AddempComponent}
    ]),
    

  ],
  providers: [ServerServices],
  bootstrap: [AppComponent]


})

export class AppModule { }
