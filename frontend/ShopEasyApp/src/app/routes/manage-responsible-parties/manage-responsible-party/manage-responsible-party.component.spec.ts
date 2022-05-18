import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResponsiblePartyComponent } from './manage-responsible-party.component';

describe('ManageResponsiblePartyComponent', () => {
  let component: ManageResponsiblePartyComponent;
  let fixture: ComponentFixture<ManageResponsiblePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageResponsiblePartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResponsiblePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
