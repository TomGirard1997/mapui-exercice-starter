import { Component, Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

@Injectable()
export class PatientListComponent {
  patientList = []
}
