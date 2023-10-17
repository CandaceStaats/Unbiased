import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Appl } from './appl.model';
import { ApplyService } from './apply.service';
import { CreateApplDto } from './dto/create-appl.dto';
import { start } from 'repl';


@Controller('apply')
export class ApplyController {
    constructor(private applyService:ApplyService) {}

    @Get()
    getAllApply(): Appl[] {
        return this.applyService.getAllApply();
    }

    //maybe not needed
    @Get('/:id')
    getApplById(@Param('id') id: string): Appl {
        return this.applyService.getApplById(id);
    }

    @Post()
    createAppl( @Body() createApplDto: CreateApplDto): Appl {
        //console.log('name', name);
        //console.log('email', email);
        //console.log('encryInfo', email);
        return this.applyService.createAppl(createApplDto);
    }
}


