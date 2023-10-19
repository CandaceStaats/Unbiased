import { Body, Controller, Get, Param, Post, UseInterceptors, UploadedFile, Patch, Query } from '@nestjs/common';
import { CreateCreateDto } from './dto/create-create.dto';
import { Create } from './creates.model';
import { makeURL } from 'src/filewithlinkenc';
import { MailService } from 'src/mailsending';
import { CreatesService } from './creates.service';

@Controller('create')
export class CreatesController {
    constructor(private createsService:CreatesService) {}


    @Post()
    createCreate(  @Body() createCreateDto: CreateCreateDto, ): Create {
        let create : Create = this.createsService.createCreate(createCreateDto);
        let send : MailService;
        send.sendUserConfirmation(create.companyEmail, makeURL(create.companyName, create.jobTitle, create.companyEmail));
        return create;
    }

}
