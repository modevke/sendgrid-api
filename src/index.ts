import {sendmail} from './Sendgrid';

sendmail({
    to: '',
    from: '', 
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}).then((data) => console.log(data)).catch((e) => console.log(e))