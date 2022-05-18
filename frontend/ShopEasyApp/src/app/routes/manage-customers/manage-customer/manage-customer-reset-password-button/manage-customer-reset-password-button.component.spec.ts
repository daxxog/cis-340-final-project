import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerResetPasswordButtonComponent } from './manage-customer-reset-password-button.component';

describe('ManageCustomerResetPasswordButtonComponent', () => {
  let component: ManageCustomerResetPasswordButtonComponent;
  let fixture: ComponentFixture<ManageCustomerResetPasswordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerResetPasswordButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerResetPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
