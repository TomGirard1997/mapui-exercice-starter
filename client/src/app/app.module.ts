import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';


@NgModule({
    declarations: [
        AppComponent, 
        DoctorsListComponent, 
        PatientListComponent, DoctorDetailsComponent, PatientAddComponent, PatientEditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule, 
        ScrollingModule,
        BrowserAnimationsModule,
        FormsModule,

        MatButtonModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
