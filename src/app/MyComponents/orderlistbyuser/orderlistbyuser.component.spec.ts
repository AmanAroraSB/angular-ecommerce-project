import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistbyuserComponent } from './orderlistbyuser.component';

describe('OrderlistbyuserComponent', () => {
  let component: OrderlistbyuserComponent;
  let fixture: ComponentFixture<OrderlistbyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderlistbyuserComponent]
    });
    fixture = TestBed.createComponent(OrderlistbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
