import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Exam } from '../../shared/models/exam';

@Injectable()
export class HomeService {

  constructor(private request: RequestService, private sessionService: SessionService) { }

  getResults = () : Observable<Exam[]> => {
    return  this.request.get('user/' + this.sessionService.user.id + '/results').
            pipe(catchError(err => this.request.handleError(err)));
  }

  getStudents = () => {
    return this.request.get('user/students').pipe(catchError(err => this.request.handleError(err)));
  }
}
