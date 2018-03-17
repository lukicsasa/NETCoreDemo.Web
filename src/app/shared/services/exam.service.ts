import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { catchError } from 'rxjs/operators/catchError';
import { Exam } from '../models/exam';
 

@Injectable()
export class ExamService {

  constructor(private requestService: RequestService) { }

  getAllExams = () => {
    return this.requestService.get('exam/all').pipe(catchError(err => this.requestService.handleError(err)));
  }

  addExam = (exam: Exam) => {
    return this.requestService.post('exam', {...exam}).pipe(catchError(err => this.requestService.handleError(err)));
  }
}
