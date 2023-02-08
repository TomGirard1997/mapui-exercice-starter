import { Controller, Get } from '@nestjs/common';
import { TreatmentService } from './treatment.service';

@Controller('treatment')
export class TreatmentController {
     
    constructor(private treatmentService:TreatmentService){}
 
    @Get()
    async getAll(){
        return await this.treatmentService.getAll();
    }
}
