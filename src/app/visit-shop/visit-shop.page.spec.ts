import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitShopPage } from './visit-shop.page';

describe('VisitShopPage', () => {
  let component: VisitShopPage;
  let fixture: ComponentFixture<VisitShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
