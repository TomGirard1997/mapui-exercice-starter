import { Doctor } from "../doctor/doctor";

export interface Treatment {
    start: Date;
    end: Date;
    name: string;
    code: string;
    doctor: Doctor
}
