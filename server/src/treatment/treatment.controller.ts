import { Controller, Get, Param } from '@nestjs/common';
import { TreatmentService } from './treatment.service';

@Controller('treatment')
export class TreatmentController {
     
    constructor(private treatmentService:TreatmentService){}
 
    @Get()
    async getAll(){
        return await this.treatmentService.getAll();
    }

    @Get("/doctorId/:doctorId")
    async getAllByDoctorId(@Param('doctor') doctorId:string){
        return await this.treatmentService.getAllByDoctorId(doctorId);
    }
}
