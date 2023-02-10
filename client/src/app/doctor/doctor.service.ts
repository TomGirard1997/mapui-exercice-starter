import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Doctor[]>("http://localhost:3000/doctor")
  }

  getById(id: string) {
    return this.http.get<Doctor>(
     `http://localhost:3000/doctor/${id}`
    );
   }
}
