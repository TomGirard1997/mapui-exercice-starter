import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentService } from 'src/app/treatment/treatment.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router:Router, private doctorService:DoctorService, private treatmentService:TreatmentService) {}

  public doctorId:string=""
  public doctor:Doctor={
    _id: '',
    firstName: '',
    lastName: '',
    speciality: '',
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.doctorId = param['id'];
      this.doctorService.getById(this.doctorId).subscribe((data) => {
        this.doctor = data
      })
    })
  }
}

