import { Resend } from 'resend';
import 'server-only';
import { env } from '../../env';

export const resend = new Resend(env.RESEND_KEY);
