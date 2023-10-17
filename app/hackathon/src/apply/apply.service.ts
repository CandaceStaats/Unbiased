import { Injectable } from '@nestjs/common';
import { Appl, ApplStatus } from './appl.model';
import { v4 as uuid} from 'uuid';
import { CreateApplDto } from './dto/create-appl.dto';

@Injectable()
export class ApplyService {
    private apply: Appl[] = [];
    
    getAllApply(): Appl[] {
        return this.apply;
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

