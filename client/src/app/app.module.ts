import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';


@NgModule({
    declarations: [
        AppComponent, 
        DoctorsListComponent, 
        PatientListComponent, DoctorDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule, 
        ScrollingModule,
        BrowserAnimationsModule,

        MatButtonModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
