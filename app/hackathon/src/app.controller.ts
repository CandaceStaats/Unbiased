import { Controller, Body, Post } from '@nestjs/common';
import { AppService, checkdto, makeURL } from './app.service';
import { CreateHiringDto, CreateApplyingDto } from './hiringdto';
import { get} from 'http';

// @Controller('banana')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Post()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

@Controller('joblisting')
export class listController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() hiringDto: CreateHiringDto) {
  
	if (checkdto(hiringDto.name, hiringDto.title, hiringDto.email) == 1){
		return this.appService.hiringError();
 	}
	const link = makeURL(hiringDto.name, hiringDto.title, hiringDto.email);
	console.log(link);
	}
	// And send that link to the Hiring Manager, using the e-mail provided
}

@Controller('applying')
export class applController {
	constructor(private readonly appService: AppService) {}

	@Post()
	create(@Body() applyingDto: CreateApplyingDto) {
		if (!errorcheck(hiringInfo)){
			return this.appService.applError();
		}
	}
	//Now we send the resume and name to token team to get a redacted resume
	// And send the joblisting link the applicant used to a de-encrypt function
	// then we send both the hiring managers de-encrypted email and the applicants to encrypt
	// and finally we send the redacted resume and the newly encrypted link to hiring manager
}

// @Controller('hiring')
// export class hiringController {
// 	constructor(private readonly appService; Appservice) {}

// 	@Post()
// 	// de-encrypt the link used to call in order to get the HRM and applicant's email
// 	// send an automated e-mail to applicant, with HRM's e-mail in body
// }

