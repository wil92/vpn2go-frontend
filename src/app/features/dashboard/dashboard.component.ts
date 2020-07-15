import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { AuthService, VpnService } from '../../core/services';
import { ListResponse } from '../../core/models';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  titles: string[] = [];
  items: string[][];

  titlePos: Map<string, number>;

  constructor(private auth: AuthService, private vpn: VpnService) {
  }

  ngOnInit(): void {
    timer(0, 5000)
      .pipe(flatMap(() => this.vpn.fetchListOfUsers()))
      .subscribe(this.loadList.bind(this));
  }

  async logOut() {
    await this.auth.logOut();
  }

  private loadList({titles, items}: ListResponse) {
    this.titlePos = new Map<string, number>();
    titles.forEach((value, index) => this.titlePos.set(value, index));

    this.titles = titles;
    this.items = items.reduce((previousValue, currentValue) => {
      const objList = Array(titles.length).fill('');
      Object.keys(currentValue).forEach(key => objList[this.titlePos.get(key)] = currentValue[key]);
      return [...previousValue, objList];
    }, []);
  }

  downloadCert(item: string[]) {
    const namePos = this.titlePos.get('name');
    const user = item[namePos];
    this.vpn.fetchCertificate(user).subscribe(
      certText => {
        const fileBlob = new Blob([certText], {type: 'text/plain;charset=utf-8'});
        saveAs(fileBlob, `${user}.ovpn`);
      },
      err => console.error(err)
    );
  }
}
