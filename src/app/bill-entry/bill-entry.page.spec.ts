import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEntryPage } from './bill-entry.page';

describe('BillEntryPage', () => {
  let component: BillEntryPage;
  let fixture: ComponentFixture<BillEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
