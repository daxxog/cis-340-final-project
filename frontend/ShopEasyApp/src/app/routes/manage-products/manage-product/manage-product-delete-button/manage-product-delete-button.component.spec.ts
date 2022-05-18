import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductDeleteButtonComponent } from './manage-product-delete-button.component';

describe('ManageProductDeleteButtonComponent', () => {
  let component: ManageProductDeleteButtonComponent;
  let fixture: ComponentFixture<ManageProductDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
