import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateitempagePage } from './createitempage.page';

describe('CreateitempagePage', () => {
  let component: CreateitempagePage;
  let fixture: ComponentFixture<CreateitempagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateitempagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateitempagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
