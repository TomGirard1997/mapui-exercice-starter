import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
 
@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}

  async getAll():Promise<Doctor[]>{
    return await this.doctorModel.find().exec();
  }

  async getByid(id: string) {
    return await this.doctorModel.findById(id).exec();
  }
}