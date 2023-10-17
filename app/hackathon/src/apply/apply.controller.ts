import { Body, Controller, Get, Post } from '@nestjs/common';
import { Appl } from './appl.model';
import { ApplyService } from './apply.service';

@Controller('apply')
export class ApplyController {
    constructor(private applyService:ApplyService) {}

    @Get()
    getAllApply(): Appl[] {
        return this.applyService.getAllApply();
    }

    @Post()
    createAppl( @Body() body) {
        console.log('body', body);  
    }
}

