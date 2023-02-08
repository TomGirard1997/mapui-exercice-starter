
import { Controller, Get } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    
    constructor(private patientService:PatientService){}
 
    @Get()
    async getAll(){
        return await this.patientService.getAll();
    }
}