import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSelectPage } from './product-list-select.page';

describe('ProductListSelectPage', () => {
  let component: ProductListSelectPage;
  let fixture: ComponentFixture<ProductListSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
