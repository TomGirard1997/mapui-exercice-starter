import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schema/patient.schema';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'Patient',
          schema: PatientSchema,
          collection: 'patient',
        },
      ]),
    ],
    providers: [PatientService],
    controllers: [PatientController],
  })
export class PatientModule {}
