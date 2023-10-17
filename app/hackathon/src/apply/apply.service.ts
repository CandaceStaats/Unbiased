import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Appl, ApplStatus } from './appl.model';
import { CreateApplDto } from './dto/create-appl.dto';

@Injectable()
export class ApplyService {
    private apply: Appl[] = [];
    
    getAllApply(): Appl[] {
        return this.apply;
    }

    getApplById(id: string): Appl {
        return this.apply.find((appl) => appl.id === id)
    }

    createAppl(createApplDto: CreateApplDto ): Appl {
        const { name, email, encryInfo} = createApplDto;

        const appl: Appl = {
            id: uuid(),
            name,
            email,
            encryInfo,
            status: ApplStatus.OPEN,
        };
        this.apply.push(appl);

        return appl;
    }
}

