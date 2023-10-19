import { IsNotEmpty } from "class-validator";

export class CreateCreateDto{
    @IsNotEmpty()
    companyName: string;
    @IsNotEmpty()
    companyEmail: string;
    @IsNotEmpty()
    jobTitle: string;
}
