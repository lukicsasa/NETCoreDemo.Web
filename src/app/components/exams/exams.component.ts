import { Component, OnInit } from '@angular/core';
import { Exam } from '../../shared/models/exam';
import { ExamService } from '../../shared/services/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  exams: Exam[];
  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.getAllExams();
  }

  getAllExams = () => {
    this.examService.getAllExams().subscribe(data => this.exams = data);
  }

}
