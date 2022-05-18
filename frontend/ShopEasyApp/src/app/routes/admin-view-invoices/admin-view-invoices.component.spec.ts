import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewInvoicesComponent } from './admin-view-invoices.component';

describe('AdminViewInvoicesComponent', () => {
  let component: AdminViewInvoicesComponent;
  let fixture: ComponentFixture<AdminViewInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
