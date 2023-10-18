import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './emailuser';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
//import { MailService } from './mail.service';
import { join } from 'path';

//fix this later or don't 

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user,
      from: '"Unbiased" <get.unbiased@gmail.com>',
      subject: "We've got something for you! We love you dearly",
      template: './joblistTemplate', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user,
        url,
      },
    });
  }
}

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'google.com',
        secure: false,
        auth: {
          user: 'get.unbiased@gmail.com',
          pass: 'UnbiasedPass',
        },
      },
      defaults: {
        from: '"Unbiased Noreply" <get.unbiased@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}


