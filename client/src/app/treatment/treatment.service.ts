import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Treatment[]>("http://localhost:3000/treatment")
  }

  getById(id: string) {
    return this.http.get<Treatment>(`http://localhost:3000/treatment/id/${id}`);
  }

  getMultipleById(ids: string[]) {
    let params = new HttpParams();
    ids.forEach(id => {
      params = params.append('id', id);
    });
    return this.http.get<Treatment[]>(`http://localhost:3000/treatment/multiple`, {params});
  }


  getAllByDoctorId(doctorId: string) {
    return this.http.get<Treatment[]>(
     `http://localhost:3000/treatment/doctorId/${doctorId}`
    );
   }

  getAllByPatientId(patientId: string) {
    return this.http.get<Treatment[]>(
      `http://localhost:3000/treatment/patientId/${patientId}`
     );
  }
}
