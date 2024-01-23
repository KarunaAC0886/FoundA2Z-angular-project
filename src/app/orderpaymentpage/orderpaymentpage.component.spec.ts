import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpaymentpageComponent } from './orderpaymentpage.component';

describe('OrderpaymentpageComponent', () => {
  let component: OrderpaymentpageComponent;
  let fixture: ComponentFixture<OrderpaymentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderpaymentpageComponent]
    });
    fixture = TestBed.createComponent(OrderpaymentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
