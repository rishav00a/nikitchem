import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeReportPage } from './cheque-report.page';

describe('ChequeReportPage', () => {
  let component: ChequeReportPage;
  let fixture: ComponentFixture<ChequeReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
