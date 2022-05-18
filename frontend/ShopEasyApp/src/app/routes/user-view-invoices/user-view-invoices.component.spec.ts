import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewInvoicesComponent } from './user-view-invoices.component';

describe('UserViewInvoicesComponent', () => {
  let component: UserViewInvoicesComponent;
  let fixture: ComponentFixture<UserViewInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
