import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { TreatmentModule } from './treatment/treatment.module';
import { DoctorModule } from './doctor/doctor.module';


@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://127.0.0.1:27017/test'
        ),
        PatientModule,
        TreatmentModule,
        DoctorModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
