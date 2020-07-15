import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CSVDecoder } from '../utils';
import { Cert, ListResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class VpnService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  fetchListOfUsers(): Observable<ListResponse> {
    return this.http.get(this.apiUrl, {responseType: 'text'}).pipe(map(result => this.decodeCSV(result)));
  }

  fetchStatus(): Observable<ListResponse> {
    const endpoint = this.apiUrl + (this.apiUrl[this.apiUrl.length - 1] === '/' ? 'status' : '/status');
    return this.http.get(endpoint, {responseType: 'text'}).pipe(map(result => this.decodeCSV(result)));
  }

  private decodeCSV(text: string): ListResponse {
    const decoder = new CSVDecoder(text);
    const titles = decoder.nextLine();
    const items = decoder.decode();
    return {titles, items} as ListResponse;
  }

  createNewCertificate(cert: Cert): Observable<string> {
    return this.http.post(this.apiUrl, cert, {responseType: 'text'});
  }

  fetchCertificate(user: string): Observable<string> {
    const endpoint = this.apiUrl + (this.apiUrl[this.apiUrl.length - 1] === '/' ? user : `/${user}`);
    return this.http.get(endpoint, {responseType: 'text'});
  }
}
