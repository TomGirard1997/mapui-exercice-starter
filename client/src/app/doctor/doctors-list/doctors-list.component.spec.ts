import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListComponent } from './doctors-list.component';

describe('DoctorListComponent', () => {
  let component: DoctorsListComponent;
  let fixture: ComponentFixture<DoctorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
