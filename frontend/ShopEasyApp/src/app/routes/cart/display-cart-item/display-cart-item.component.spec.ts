import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCartItemComponent } from './display-cart-item.component';

describe('DisplayCartItemComponent', () => {
  let component: DisplayCartItemComponent;
  let fixture: ComponentFixture<DisplayCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
