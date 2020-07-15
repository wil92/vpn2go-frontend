import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CSVDecoder } from '../utils';
import { ListResponse } from '../models';

@Injectable()
export class VpnService {

  constructor() {
  }

  fetchListOfUsers(): Observable<ListResponse> {
    const result = 'name,begin,end,status\n' +
      'test,Jul 15 11:24:36 2020 GMT,Jul 14 11:24:36 2024 GMT,VALID\n' +
      'test2,Jul 15 11:24:55 2020 GMT,Jul 14 11:24:55 2024 GMT,VALID\n';
    const decoder = new CSVDecoder(result);
    const titles = decoder.nextLine();
    const items = decoder.decode();
    return of({titles, items} as ListResponse);
  }
}
