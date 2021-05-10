import { $host } from '../index';

export const sendMail = async (mail, subject, html) => await $host.post('google/nodemailer', { mail, subject, html });
