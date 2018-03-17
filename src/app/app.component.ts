import { Component, Output } from '@angular/core';
import { SessionService } from './shared/services/session.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  isLoggedIn: boolean;
  constructor(private sessionService: SessionService) {
    this.isLoggedIn = this.sessionService.isLoggedIn;
    this.sessionService.sessionChangedStream.subscribe(data => {
      this.isLoggedIn = this.sessionService.isLoggedIn;
    });
  }
}
