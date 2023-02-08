import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from './schema/doctor.schema';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'Doctor',
          schema: DoctorSchema,
          collection: 'doctor',
        },
      ]),
    ],
    providers: [DoctorService],
    controllers: [DoctorController],
  })
export class DoctorModule {}
