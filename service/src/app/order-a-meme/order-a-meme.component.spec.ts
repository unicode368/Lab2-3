import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAMemeComponent } from './order-a-meme.component';

describe('OrderAMemeComponent', () => {
  let component: OrderAMemeComponent;
  let fixture: ComponentFixture<OrderAMemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAMemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
