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

  async getMultipleById(ids: string):Promise<Treatment[]> {
    const test = await this.treatmentModel.find({"_id" : {"$in" : ids}});
    return await this.treatmentModel.find({"_id" : {"$in" : ids}});
  }

  async getById(id: string) {
    return await this.treatmentModel.findById(id).exec();
  }

  async getAllByDoctorId(doctorId:string):Promise<Treatment[]>{
    return await this.treatmentModel.find({ doctor: { _id : doctorId} }).exec()
  }
}

