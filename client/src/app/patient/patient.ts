import { Treatment } from "../treatment/treatment";

export interface Patient {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    treatments: Treatment[]  
}
