import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import {Exam} from './models/exam';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(private request: RequestService, private sessionService: SessionService) { }

  getResults = () : Observable<Exam[]> => {
    return  this.request.get('user/' + this.sessionService.user.id + '/results').
            pipe(catchError(err => this.request.handleError(err)));
  }
}
