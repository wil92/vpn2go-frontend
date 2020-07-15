import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CertFormComponent } from './cert-form.component';
import { VpnService } from '../../../core/services';

class VpnServiceStub {
}

describe('CertFormComponent', () => {
  let component: CertFormComponent;
  let fixture: ComponentFixture<CertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CertFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: VpnService, useClass: VpnServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
