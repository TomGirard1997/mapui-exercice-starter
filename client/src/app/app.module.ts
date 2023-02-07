import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MedicListComponent } from './medic-list/medic-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
    declarations: [
        AppComponent, 
        MedicListComponent, 
        PatientListComponent,
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        
        BrowserAnimationsModule,

        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
