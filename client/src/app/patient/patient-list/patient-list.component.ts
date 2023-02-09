import { Component, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

@Injectable()
export class PatientListComponent {
  constructor(private patientService: PatientService, private http:HttpClient) { }

  patients: Patient[] = []
  pictures: String[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.patientService.get().subscribe((data) => {
      this.patients = data;
      for (var patient in this.patients) {
        var rndInt = Math.floor(Math.random() * 50)
        this.pictures.push("https://randomuser.me/api/portraits/men/"+rndInt+".jpg");
      }
    });
  }
}
