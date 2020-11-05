import sgMail from '@sendgrid/mail';
import { configs } from './configs'
import { MailAttributes } from './interfaces';

sgMail.setApiKey(configs.api_key)

export async function sendmail(email: MailAttributes){

    let mail;
    try{
        mail = await sgMail.send(email);
    }catch(e){
        return e
    }

    return mail

}