import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

declare var window: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

@Injectable()
export class PatientListComponent implements OnInit {
  constructor(private patientService: PatientService, private http:HttpClient) { }

  patients: Patient[] = []
  pictures: String[] = []

  patientIdToDelete: string = '';
  deleteModal: any;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getAll()
  }

  getAll() {
    this.patientService.get().subscribe((data) => {
      this.patients = data;
      for (var patient of this.patients) {
        var rndInt = Math.floor(Math.random() * 50)
        var gender = patient.gender === 'Homme' ? 'men' : 'women' 
        this.pictures.push("https://randomuser.me/api/portraits/"+gender+"/"+rndInt+".jpg");
      }
    });
  }

  openDeleteModal(id: string) {
    this.patientIdToDelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.patientService.delete(this.patientIdToDelete).subscribe(() => {
      this.patients = this.patients.filter((_) => _._id !== this.patientIdToDelete);
      this.deleteModal.hide();
    });
  }
}
