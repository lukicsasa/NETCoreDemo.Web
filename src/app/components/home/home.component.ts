import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import { HomeService } from './home.service';
import { Exam } from './models/exam';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Exam[];
  constructor(private sessionService: SessionService, private homeService: HomeService) { }

  ngOnInit() {
    if (this.sessionService.user.role.name === "Student")
      this.getResults();
  }

  getResults = () => {
    this.homeService.getResults().subscribe(data => this.results = data);
  }

}
