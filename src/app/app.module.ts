import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {AlertComponent} from './components/alert/alert.component';
import {FormsModule} from '@angular/forms';
import {AlertService} from './components/alert/alert.service';
import {RegisterService} from './components/register/register.service';
import {RequestService} from './shared/services/request.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ AlertService, RequestService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
