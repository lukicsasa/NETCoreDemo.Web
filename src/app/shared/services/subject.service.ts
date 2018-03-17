import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { catchError } from 'rxjs/operators/catchError';
import { AlertService } from '../../components/alert/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class SubjectService {

  constructor(private requestService: RequestService, private alertService: AlertService, private router: Router) { }

  getSubjects = () => {
    return this.requestService.get('subject/all')
          .pipe(catchError(err => this.requestService.handleError(err)));
  }

  addSubject = (name) => {
    this.requestService.post('subject', {name: name}).subscribe(
      data => {
          this.alertService.showSuccess('Added subject, redirecting to list of subjects...');
          setTimeout(() => {
            this.router.navigate(['subjects']);
          }, 2000);
      }
    )
  }
}
