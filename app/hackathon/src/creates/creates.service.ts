import { Injectable } from '@nestjs/common';
import { Create } from './creates.model';
import { CreateCreateDto } from './dto/create-create.dto';

@Injectable()
export class CreatesService {
    private creates: Create[] = [];

    createCreate(createCreateDto: CreateCreateDto): Create {
        const { companyName, jobTitle, companyEmail} = createCreateDto;

        const create: Create = {
            companyName,
            jobTitle,
            companyEmail,
        };
        this.creates.push();

        return create;
    }
}
