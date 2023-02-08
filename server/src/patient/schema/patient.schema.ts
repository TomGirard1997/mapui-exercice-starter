import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Treatment } from 'src/treatment/schema/treatment.schema';

export type PatientDocument = Patient & Document

@Schema({collection:'patient'})
export class Patient {
    @Prop()
    firstName:string;
 
    @Prop()
    lastName:string;
 
    @Prop()
    age:number;
 
    @Prop()
    gender:string;

    @Prop()
    treatments: [Treatment]
}
 
export const PatientSchema = SchemaFactory.createForClass(Patient);