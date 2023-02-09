import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  constructor(private doctorService: DoctorService, private http:HttpClient) {}

  doctors: Doctor[] = []
  pictures: String[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.doctorService.get().subscribe((data) => {
      this.doctors = data;
      for (var doctor in this.doctors) {
        var rndInt = Math.floor(Math.random() * 50)
        this.pictures.push("https://randomuser.me/api/portraits/men/"+rndInt+".jpg");
      }
      console.log(this.pictures)
    });
  }
}
