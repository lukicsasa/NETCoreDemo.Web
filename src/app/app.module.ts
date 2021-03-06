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
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SessionService } from './shared/services/session.service';
import { LoginService } from './components/login/login.service';
import { HomeService } from './components/home/home.service';
import { SubjectService } from './shared/services/subject.service';
import { ExamsComponent } from './components/exams/exams.component';
import { ExamService } from './shared/services/exam.service';
import { NgSelectModule} from '@ng-select/ng-select';
import { DateOnlyPipe } from './shared/pipes/date-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    HeaderComponent,
    ExamsComponent,
    DateOnlyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard, AlertService,SubjectService,ExamService, RequestService, HomeService, RegisterService, SessionService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
