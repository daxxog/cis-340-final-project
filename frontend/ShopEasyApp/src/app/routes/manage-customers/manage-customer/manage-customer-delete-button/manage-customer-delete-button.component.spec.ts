import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerDeleteButtonComponent } from './manage-customer-delete-button.component';

describe('ManageCustomerDeleteButtonComponent', () => {
  let component: ManageCustomerDeleteButtonComponent;
  let fixture: ComponentFixture<ManageCustomerDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
