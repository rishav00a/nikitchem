import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarpenterWsPage } from './list-carpenter-ws.page';

describe('ListCarpenterWsPage', () => {
  let component: ListCarpenterWsPage;
  let fixture: ComponentFixture<ListCarpenterWsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarpenterWsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarpenterWsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
