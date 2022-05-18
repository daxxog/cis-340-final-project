import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingCategorySelectorComponent } from './clothing-category-selector.component';

describe('ClothingCategorySelectorComponent', () => {
  let component: ClothingCategorySelectorComponent;
  let fixture: ComponentFixture<ClothingCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingCategorySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
