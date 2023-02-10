import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

const routes: Routes = [
    {path: "", component:PatientListComponent},
    {path: "patient-add", component:PatientAddComponent},
    {path: 'patient-edit/:id', component: PatientEditComponent,},

    {path: "doctors-list", component:DoctorsListComponent},
    {path: "doctor-details/:id", component:DoctorDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
