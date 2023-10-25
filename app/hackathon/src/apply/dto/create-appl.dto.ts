import { IsNotEmpty } from "class-validator";

export class CreateApplDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    email: string;
    encryInfo: string;
    @IsNotEmpty()
    cv: Express.Multer.File;
}
