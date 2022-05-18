import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerUsernameInputComponent } from './manage-customer-username-input.component';

describe('ManageCustomerUsernameInputComponent', () => {
  let component: ManageCustomerUsernameInputComponent;
  let fixture: ComponentFixture<ManageCustomerUsernameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerUsernameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerUsernameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
