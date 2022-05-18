import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblePartySelectorComponent } from './responsible-party-selector.component';

describe('ResponsiblePartySelectorComponent', () => {
  let component: ResponsiblePartySelectorComponent;
  let fixture: ComponentFixture<ResponsiblePartySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiblePartySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiblePartySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
