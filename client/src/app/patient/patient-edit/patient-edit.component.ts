import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrUpdatePatient } from '../create-or-update-patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {}
 
  itemId: string = '';
  patient: CreateOrUpdatePatient = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
  };
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.itemId = param.get('id') ?? '';
      this.getById();
    });
  }
 
  getById() {
    this.patientService.getById(this.itemId).subscribe((data) => {
      this.patient.firstName = data.firstName;
      this.patient.lastName = data.lastName;
      this.patient.age = data.age;
      this.patient.gender = data.gender;
    });
  }
 
  update() {
    this.patientService
      .update(this.itemId, this.patient)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
