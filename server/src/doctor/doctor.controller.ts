
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {

     constructor(private doctorService:DoctorService){}
 
    @Get()
    async getAll(){
        return await this.doctorService.getAll();
    }

    @Get("/:id")
    async getById(@Param('id') id:string){
        return await this.doctorService.getByid(id);
    }
}