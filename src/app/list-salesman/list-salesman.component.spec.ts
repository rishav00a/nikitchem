import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesmanComponent } from './list-salesman.component';

describe('ListSalesmanComponent', () => {
  let component: ListSalesmanComponent;
  let fixture: ComponentFixture<ListSalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSalesmanComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
