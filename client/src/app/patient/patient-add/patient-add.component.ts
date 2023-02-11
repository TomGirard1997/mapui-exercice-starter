import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrUpdatePatient } from '../create-or-update-patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  constructor(
    private patientService: PatientService,
    private router: Router
  ) {}
  
  genders: string[]= [
    'Homme',
    'Femme'
  ]

  patient: CreateOrUpdatePatient = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
  };
 
  ngOnInit(): void {}
 
  create() {
    this.patientService.create(this.patient).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
