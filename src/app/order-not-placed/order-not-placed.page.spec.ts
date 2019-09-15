import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotPlacedPage } from './order-not-placed.page';

describe('OrderNotPlacedPage', () => {
  let component: OrderNotPlacedPage;
  let fixture: ComponentFixture<OrderNotPlacedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNotPlacedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotPlacedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
