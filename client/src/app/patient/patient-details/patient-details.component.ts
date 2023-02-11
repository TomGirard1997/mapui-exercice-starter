import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/doctor/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Treatment } from 'src/app/treatment/treatment';
import { TreatmentService } from 'src/app/treatment/treatment.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent {
  constructor(private route:ActivatedRoute, private router:Router, private patientService: PatientService, private treatmentService:TreatmentService, private doctorService:DoctorService) {}

  public patientId:string=""
  public patientTreatments:Treatment[]=[]
  public doctorPrescribersIds:string[]=[]
  public doctorPrescribers:Doctor[]=[]
  public patient:Patient={
    _id: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    treatments: [],
  }
  public isLoaded:boolean=false

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.patientId = param['id'];
      this.patientService.getById(this.patientId).subscribe((data) => {
        this.patient = data
        this.treatmentService.getMultipleById(this.patient.treatments).subscribe((data) => {
          this.patientTreatments = data
          for (let treatment of this.patientTreatments) {
            this.doctorPrescribersIds.push(treatment.doctor._id)
            // treatment.doctor._id modifiés ????
          }
          this.doctorService.getMultipleById(this.doctorPrescribersIds).subscribe((data) => {
            this.doctorPrescribers = data
          })
        })
      })
    })
  }
}
