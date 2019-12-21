import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMyMemesComponent } from './see-my-memes.component';

describe('SeeMyMemesComponent', () => {
  let component: SeeMyMemesComponent;
  let fixture: ComponentFixture<SeeMyMemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMyMemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMyMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
