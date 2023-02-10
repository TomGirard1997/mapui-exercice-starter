import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Treatment[]>("http://localhost:3000/treatment")
  }

  getAllByDoctorId(doctorId: string) {
    return this.http.get<Treatment[]>(
     `http://localhost:3000/treatment/doctorId/${doctorId}`
    );
   }
}
