import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document

@Schema({collection:'doctor'})
export class Doctor {
    @Prop()
    firstName:string;
 
    @Prop()
    lastName:string;
 
    @Prop()
    speciality:string;

}
 
export const DoctorSchema = SchemaFactory.createForClass(Doctor);