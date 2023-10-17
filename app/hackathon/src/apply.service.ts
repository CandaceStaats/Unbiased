import { Injectable } from '@nestjs/common';
import { Appl, ApplStatus } from './appl.model';
import { v4 as uuid} from 'uuid';

@Injectable()
export class ApplyService {
    private apply: Appl[] = [];
    
    getAllApply(): Appl[] {
        return this.apply;
    }

    createAppl(name: string, encryInfo: string, email:string ): Appl {
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

