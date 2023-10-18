import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Appl, ApplStatus } from './appl.model';
import { CreateApplDto } from './dto/create-appl.dto';
import { GetApplyFilterDto } from './dto/get-apply-filter.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { redact } from '../redact/redact';
import { pdf_normalize } from '../pdf_to_str';


@Injectable()
export class ApplyService {
    private apply: Appl[] = [];
    
    getAllApply(): Appl[] {
        return this.apply;
    }

    getApplById(id: string): Appl {
        const found = this.apply.find((appl) => appl.id === id);

        if (!found) {
            throw new NotFoundException();
        }
        return found;
    }

    getApplyWithFilters(filterDto: GetApplyFilterDto): Appl[] {
        const {status, search} = filterDto;

        let apply = this.getAllApply();
        if (status) {
            apply = apply.filter((appl) => appl.status === status);
        }

        if (search) {
            apply = apply.filter((appl) => {
                if (appl.name.includes(search) || appl.email.includes(search)) {
                    return true;
                }

                return false;
            });
        }
        return apply;
    }


    createAppl(createApplDto: CreateApplDto ): Appl {
        const { name, email, encryInfo, cv} = createApplDto;


        const appl: Appl = {
            id: uuid(),
            name,
            email,
            encryInfo,
            cv,
            status: ApplStatus.OPEN,
        };
        this.apply.push(appl);

        return appl;
    }

    tokenizerPdf(cv: Express.Multer.File): string {
        let pdf:string = "";
    
        try {
            pdf = pdf_normalize(cv.buffer);

        } catch (NormalizationError) {
            
            console.log(NormalizationError + " tokanize error")
        }
        return pdf;
    }

    redactPdf(tokenized: string, name: string): string {
        let pdf:string = "";

        try {
            pdf = redact(tokanized, name);
        } catch (error) {
            
            console.log(error + " tokanize error")
        }
        return pdf;
    }

    deleteAppl(id: string): void {
        const found = this.getApplById(id);
        this.apply = this.apply.filter((appl) => appl.id !== found.id);
    }

    updateApplyStatus(id: string, status: ApplStatus){
        const appl = this.getApplById(id);
        appl.status = status;
        return appl;
    }
        

}

