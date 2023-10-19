import { IsNotEmpty } from "class-validator";

export class CreateApplDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    encryInfo: string;
    @IsNotEmpty()
    cv: Express.Multer.File;
}
