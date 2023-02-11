import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
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
     `http://localhost:3000/doctor/id/${id}`
    );
  }

  getMultipleById(ids: string[]) {
    let params = new HttpParams();
    ids.forEach(id => {
      params = params.append('id', id);
    });
    return this.http.get<Doctor[]>(`http://localhost:3000/doctor/multiple`, {params});
  }
}
