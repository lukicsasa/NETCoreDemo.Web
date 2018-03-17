import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AlertService} from '../../components/alert/alert.service';
import { SessionService } from './session.service';

@Injectable()
export class RequestService {
  private headers = {'Content-Type': 'application/json', 'Authorization' : null};

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService, private sessionService: SessionService) {
  }

  post(uri: any, params: Object = {}): Observable<any> {
    this.headers.Authorization = this.sessionService.accessToken; 
    uri = typeof uri === 'object' ? uri.join('/') : uri;
    return this.http.post(environment.baseUri + uri, JSON.stringify(params), {headers: this.headers});
  }

  get(uri: any, params: Object = {}): Observable<any> {
    this.headers.Authorization = this.sessionService.accessToken; 
    uri = typeof uri === 'object' ? uri.join('/') : uri;
    return this.http.get(environment.baseUri + uri, {headers: this.headers, params: this.createParams(params)});
  }

  handleError = (error: any) => {
    let message = 'Error';
    switch (error.status) {
      case 0:
        message = 'Can\'t connect to server!';
        break;
      case 401:
        this.router.navigate(['login']);
        break;
      case 400:
        this.handleValidation(error.error);
        break;
      default:
        message = error._body ? JSON.parse(error._body).message : error.message;
        if (message) {
          this.alertService.showError(message);
        }
    }

    return Observable.throw(message);
  }

  private handleValidation = (obj: any) => {
    for (const field of Object.keys(obj)) {
      this.alertService.showError(obj[field]);
    }
  }

  private createParams = (obj: any) : HttpParams => {
    let params: HttpParams;
    for(var field in obj) {
      params = params.set(field, obj[field]);
    }
    return params;
  }
}
