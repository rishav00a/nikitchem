import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarpenterWsPage } from './add-carpenter-ws.page';

describe('AddCarpenterWsPage', () => {
  let component: AddCarpenterWsPage;
  let fixture: ComponentFixture<AddCarpenterWsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarpenterWsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarpenterWsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
