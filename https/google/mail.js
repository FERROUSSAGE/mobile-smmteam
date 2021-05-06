import { $host } from '../index';

export const sendMail = async (mail, subject, html) => await $host.post('nodemailer', { mail, subject, html });
