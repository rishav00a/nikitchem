import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitShopTabPage } from './visit-shop-tab.page';

describe('VisitShopTabPage', () => {
  let component: VisitShopTabPage;
  let fixture: ComponentFixture<VisitShopTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitShopTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitShopTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
