import { Ratelimit } from '@unkey/ratelimit';
import 'server-only';

export const unkey = new Ratelimit({
    //TODO: Change this environment variable with env.ts
    rootKey: process.env.UNKEY_ROOT_KEY!,
    namespace: 'next15.project.v0',
    limit: 20,
    duration: '1m',
    async: true,
});
