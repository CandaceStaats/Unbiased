import { Body, Controller, Get, Post } from '@nestjs/common';
import { Appl } from './appl.model';
import { ApplyService } from './apply.service';
import { CreateApplDto } from './dto/create-appl.dto';


@Controller('apply')
export class ApplyController {
    constructor(private applyService:ApplyService) {}

    @Get()
    getAllApply(): Appl[] {
        return this.applyService.getAllApply();
    }

    @Post()
    createAppl( @Body() createApplDto: CreateApplDto): Appl {
        //console.log('name', name);
        //console.log('email', email);
        //console.log('encryInfo', email);
        return this.applyService.createAppl(createApplDto);
    }
}

