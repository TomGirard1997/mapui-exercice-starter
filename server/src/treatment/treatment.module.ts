import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatmentSchema } from './schema/treatment.schema';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'Treatment',
          schema: TreatmentSchema,
          collection: 'treatment',
        },
      ]),
    ],
    providers: [TreatmentService],
    controllers: [TreatmentController],
  })
export class TreatmentModule {}
