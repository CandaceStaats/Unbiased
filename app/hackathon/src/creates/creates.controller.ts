import { Body, Controller, Get, Param, Post, UseInterceptors, UploadedFile, Patch, Query } from '@nestjs/common';
import { CreateCreateDto } from './dto/create-create.dto';
import { Create } from './creates.model';
import { makeURL } from 'src/filewithlinkenc';
import { MailService } from 'src/mailsending';
import { CreatesService } from './creates.service';

@Controller('create')
export class CreatesController {
    constructor(private createsService:CreatesService) {}

    // @Get()
    // getApply(@Query() filterDto: GetApplyFilterDto): Appl[] {

    //     if (Object.keys(filterDto).length){
    //         return this.applyService.getApplyWithFilters(filterDto);
    //     } else {
    //         return this.applyService.getAllApply();
    //     }
    // }

    //maybe not needed
    // @Get('/:id')
    // getApplById(@Param('id') id: string): Appl {
    //     return this.applyService.getApplById(id);
    // }

    @Post()
    createCreate(  @Body() createCreateDto: CreateCreateDto, ): Create {
        let create : Create = this.createsService.createCreate(createCreateDto);
        let send : MailService;
        send.sendUserConfirmation(create.companyEmail, makeURL(create.companyName, create.jobTitle, create.companyEmail));
        return create;
    }

//     @Patch('/:id/status')
//     updateApplStatus(
//         @Param('id') id: string,
//         @Body() updateApplStatusDto: UpdateApplyStatusDto,
//     ): Appl {
//         const { status } = updateApplStatusDto;
//         return this.applyService.updateApplyStatus(id, status);
//     }
}
