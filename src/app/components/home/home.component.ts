import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import { HomeService } from './home.service';
import { Exam } from '../../shared/models/exam';
import { ExamService } from '../../shared/services/exam.service';
import { AlertService } from '../alert/alert.service';
import { User } from '../../shared/models/user';
import { SubjectService } from '../../shared/services/subject.service';
import { Subject } from '../../shared/models/subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Exam[];
  exam: Exam = new Exam();
  students: User[];
  subjects: Subject[];
  constructor(private sessionService: SessionService, private homeService: HomeService, private examService: ExamService, private alertService: AlertService, private subjectService: SubjectService) { }

  ngOnInit() {
    if (this.sessionService.user.role.name === "Student")
      this.getResults();
    else {
      this.getStudents();
      this.getSubjects();
    }
  }

  getResults = () => {
    this.homeService.getResults().subscribe(data => this.results = data);
  }

  addExam = () => {
    this.examService.addExam(this.exam).subscribe(r => { this.exam = new Exam(), this.alertService.showSuccess('Exam added!') });
  }

  getStudents = () => {
    this.homeService.getStudents().subscribe(data => this.students = data);
  }

  getSubjects = () => {
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
  }

}
