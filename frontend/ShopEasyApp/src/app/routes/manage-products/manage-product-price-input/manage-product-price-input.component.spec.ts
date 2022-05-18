import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductPriceInputComponent } from './manage-product-price-input.component';

describe('ManageProductPriceInputComponent', () => {
  let component: ManageProductPriceInputComponent;
  let fixture: ComponentFixture<ManageProductPriceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductPriceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductPriceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
