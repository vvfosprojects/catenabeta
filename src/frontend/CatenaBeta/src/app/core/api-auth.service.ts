
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILoginResultModelComponent} from '../model/login-result-model/login-result-model.component';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<ILoginResultModelComponent>{
    return this.http.post<ILoginResultModelComponent>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }
}