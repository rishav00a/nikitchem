import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkshopPage } from './add-workshop.page';

describe('AddWorkshopPage', () => {
  let component: AddWorkshopPage;
  let fixture: ComponentFixture<AddWorkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
