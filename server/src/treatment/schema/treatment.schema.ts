import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Doctor } from 'src/doctor/schema/doctor.schema';

export type TreatmentDocument = Treatment & Document

@Schema({collection:'treatment'})
export class Treatment {
    @Prop()
    start:Date;
 
    @Prop()
    end:Date;
 
    @Prop()
    name:string;
 
    @Prop()
    code:string;

    @Prop()
    doctor:Doctor;
}
 
export const TreatmentSchema = SchemaFactory.createForClass(Treatment);