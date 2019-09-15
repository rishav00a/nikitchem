import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkshopPage } from './list-workshop.page';

describe('ListWorkshopPage', () => {
  let component: ListWorkshopPage;
  let fixture: ComponentFixture<ListWorkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
