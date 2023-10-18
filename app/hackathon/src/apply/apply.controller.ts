import { Body, Controller, Get, Param, Post, UseInterceptors, UploadedFile, Patch, Query } from '@nestjs/common';
import { Appl, ApplStatus } from './appl.model';
import { ApplyService } from './apply.service';
import { CreateApplDto } from './dto/create-appl.dto';
import { start } from 'repl';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetApplyFilterDto } from './dto/get-apply-filter.dto';
import { UpdateApplyStatusDto } from './dto/update-appl-status.dto';
import { NotFoundException } from '@nestjs/common/exceptions'
import { MailService } from 'src/mailsending';

@Controller('apply')
export class ApplyController {
    constructor(private applyService:ApplyService) {}

    @Get()
    getApply(@Query() filterDto: GetApplyFilterDto): Appl[] {

        if (Object.keys(filterDto).length){
            return this.applyService.getApplyWithFilters(filterDto);
        } else {
            return this.applyService.getAllApply();
        }
    }

    //maybe not needed
    // @Get('/:id')
    // getApplById(@Param('id') id: string): Appl {
    //     return this.applyService.getApplById(id);
    // }

    @Post('/:encr')
    @UseInterceptors(FileInterceptor('cv'))
    createAppl( 
        @Body() createApplDto: CreateApplDto, 
        @UploadedFile() cv: Express.Multer.File,
        @Param('encr') encr: string
        ): Appl {
        createApplDto.cv = cv;
        let appl : Appl = this.applyService.createAppl(createApplDto);
        let token = this.applyService.tokenizerPdf(cv);
        if (!token) {
            throw new NotFoundException();
        }
        let redact = this.applyService.redactPdf(token, appl.name);
        if (!redact) {
            throw new NotFoundException();
        }

        let send : MailService;
        let email  = Buffer.from(encr, 'base64').toString('ascii');
        send.sendUserConfirmation(email.substring(email.lastIndexOf("_")), redact);
        return appl;
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
