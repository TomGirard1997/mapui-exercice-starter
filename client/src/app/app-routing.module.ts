import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicListComponent } from './medic-list/medic-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
    {path: "patient-list", component:PatientListComponent},
    {path: "medic-list", component:MedicListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
