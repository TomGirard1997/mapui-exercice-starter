import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';
 
@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async getAll():Promise<Patient[]>{
    return await this.patientModel.find().exec();
  }
}