import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

const routes: Routes = [
    {path: "patient-list", component:PatientListComponent},
    {path: "doctors-list", component:DoctorsListComponent},
    {path: "doctor-details/:id", component:DoctorDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
