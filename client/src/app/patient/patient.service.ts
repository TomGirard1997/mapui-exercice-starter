import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrUpdatePatient } from './create-or-update-patient';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Patient[]>("http://localhost:3000/patient")
  }

  getById(id: string) {
    return this.http.get<Patient>(`http://localhost:3000/patient/${id}`);
  }

  create(patient: CreateOrUpdatePatient) {
    return this.http.post<Patient>('http://localhost:3000/patient', patient);
  }
    
  update(id: string, patient: CreateOrUpdatePatient) {
   return this.http.put(`http://localhost:3000/patient/${id}`, patient);
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/patient/${id}`)
  }
}
