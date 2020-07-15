import { Component, OnDestroy, OnInit } from '@angular/core';

import { pipe, Subject, timer } from 'rxjs';
import { flatMap, takeUntil } from 'rxjs/operators';

import { AuthService, VpnService } from '../../core/services';
import { ListResponse } from '../../core/models';
import { saveAs } from 'file-saver';

interface TableInfo {
  titles: string[];
  items: string[][];
  titlePos: Map<string, number>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private REFRESH_TIME = 10000;

  certData: TableInfo;
  statusData: TableInfo;

  unsubscriber = new Subject();

  constructor(private auth: AuthService, private vpn: VpnService) {
  }

  ngOnInit(): void {
    timer(0, this.REFRESH_TIME)
      .pipe(takeUntil(this.unsubscriber), flatMap(() => this.vpn.fetchListOfUsers()))
      .subscribe(this.loadCertList.bind(this));
    timer(0, this.REFRESH_TIME)
      .pipe(takeUntil(this.unsubscriber), flatMap(() => this.vpn.fetchStatus()))
      .subscribe(this.loadStatusList.bind(this));
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
  }

  async logOut() {
    await this.auth.logOut();
  }

  private loadCertList(listResponse: ListResponse) {
    this.certData = this.loadList(listResponse);
  }

  private loadStatusList(listResponse: ListResponse) {
    this.statusData = this.loadList(listResponse);
  }

  private loadList({titles, items}: ListResponse): TableInfo {
    const titlePos = new Map<string, number>();
    titles.forEach((value, index) => titlePos.set(value, index));

    const itemsList = items.reduce((previousValue, currentValue) => {
      const objList = Array(titles.length).fill('');
      Object.keys(currentValue).forEach(key => objList[titlePos.get(key)] = currentValue[key]);
      return [...previousValue, objList];
    }, []);
    return {titles, items: itemsList, titlePos} as TableInfo;
  }

  downloadCert(item: string[], tableInfo: TableInfo) {
    const namePos = tableInfo.titlePos.get('name');
    const user = item[namePos];
    this.vpn.fetchCertificate(user)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(
        certText => {
          const fileBlob = new Blob([certText], {type: 'text/plain;charset=utf-8'});
          saveAs(fileBlob, `${user}.ovpn`);
        },
        err => console.error(err)
      );
  }
}
