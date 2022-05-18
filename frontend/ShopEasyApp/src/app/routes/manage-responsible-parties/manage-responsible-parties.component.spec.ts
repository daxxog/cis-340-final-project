import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResponsiblePartiesComponent } from './manage-responsible-parties.component';

describe('ManageResponsiblePartiesComponent', () => {
  let component: ManageResponsiblePartiesComponent;
  let fixture: ComponentFixture<ManageResponsiblePartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageResponsiblePartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResponsiblePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
