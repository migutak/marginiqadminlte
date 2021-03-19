import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarginService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(username: string) {
    return this.httpClient.get<any>(environment.api + '/tblusers/' + username);
  }
}
