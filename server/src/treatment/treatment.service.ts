import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Treatment, TreatmentDocument } from './schema/treatment.schema';
 
@Injectable()
export class TreatmentService {
  constructor(
    @InjectModel(Treatment.name) private treatmentModel: Model<TreatmentDocument>,
  ) {}

  async getAll():Promise<Treatment[]>{
    return await this.treatmentModel.find().exec();
  }
}