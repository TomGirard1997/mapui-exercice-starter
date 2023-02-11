import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { TreatmentService } from './treatment.service';

@Controller('treatment')
export class TreatmentController {
     
    constructor(private treatmentService:TreatmentService){}
 
    @Get()
    async getAll(){
        return await this.treatmentService.getAll();
    }

    @Get("/multiple")
    async getMultipleById(@Query('id') ids:string) {
        return await this.treatmentService.getMultipleById(ids)
    }

    @Get("/id/:id")
    async getById(@Param('id') id:string){
        return await this.treatmentService.getById(id);
    }
}
