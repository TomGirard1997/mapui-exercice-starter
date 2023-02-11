import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';


@NgModule({
    declarations: [
        AppComponent, 
        DoctorsListComponent, 
        PatientListComponent, DoctorDetailsComponent, PatientAddComponent, PatientEditComponent, PatientDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule, 
        ScrollingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatIconModule,
      
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
