import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitShopDetailPage } from './visit-shop-detail.page';

describe('VisitShopDetailPage', () => {
  let component: VisitShopDetailPage;
  let fixture: ComponentFixture<VisitShopDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitShopDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitShopDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
