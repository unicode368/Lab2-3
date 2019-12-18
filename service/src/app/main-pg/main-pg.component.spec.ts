import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPGComponent } from './main-pg.component';

describe('MainPGComponent', () => {
  let component: MainPGComponent;
  let fixture: ComponentFixture<MainPGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
