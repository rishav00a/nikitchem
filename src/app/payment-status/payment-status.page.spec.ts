import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusPage } from './payment-status.page';

describe('PaymentStatusPage', () => {
  let component: PaymentStatusPage;
  let fixture: ComponentFixture<PaymentStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
