
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './schema/patient.schema';

@Controller('patient')
export class PatientController {
    
    constructor(private patientService:PatientService){}
 
    @Get()
    async getAll(){
        return await this.patientService.getAll();
    }

    @Get("/:id")
    async getById(@Param('id') id:string){
        return await this.patientService.getByid(id);
    }

    @Post()
    async createPatient(@Body() patient: Patient) {
        const newBook = await this.patientService.create(patient);
        return newBook;
    }

    @Put('/:id')
    async updatePatient(
      @Param('id') id: string,
      @Body() patient: Patient,
    ) {
      return await this.patientService.update(id, patient);
    }

    @Delete('/:id')
    async deletePatient(@Param('id') id:string){
      await this.patientService.delete(id);
    }
}