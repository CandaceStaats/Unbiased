import { ApplStatus } from "../appl.model";
import { IsEnum } from 'class-validator';

export class UpdateApplyStatusDto {
    @IsEnum(ApplStatus)
    status: ApplStatus;
}