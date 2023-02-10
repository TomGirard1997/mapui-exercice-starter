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

  async getByid(id: string) {
    return await this.patientModel.findById(id).exec();
  }

  async create(patient: Patient) {
    const newPatient = new this.patientModel(patient);
    return await newPatient.save();
  }

  async update(id: string, patient: Patient) {
    return await this.patientModel.findByIdAndUpdate(id, patient, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.patientModel.findByIdAndRemove(id);
  }

}