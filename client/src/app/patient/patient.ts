import { Treatment } from "../treatment/treatment";

export interface Patient {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    treatments: string[]  
}
