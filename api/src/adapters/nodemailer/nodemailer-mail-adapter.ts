import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1eacb9d085df05",
    pass: "eeb421e4f9fac2"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: 'JunioKOI <nhoim@gmail.com>',
      subject,
      html: body,
    })
  }
}