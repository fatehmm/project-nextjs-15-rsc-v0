This project, `project-nextjs-15-rsc-v0` is bootstrapped with `create-next-app` and uses Next.js 15.

I want to build a base project that I can just git clone and start to build.

I tend to keep 3rd party external services as less as possible.

### My recommendations to the developers using this project:

1. This is a Next.js App Router project, not a Pages Router project, try to use server components whenever possible.

### List of features in this project:

1. Extensive component library using Shadcn/ui and other extensions.
2. Authentication & Authorization (WIP)
3. Proper server and client components seperation using `server-only` and `client-only` packages
4. Environment variable validation during build time using [T3 Env](https://env.t3.gg)
5. Ratelimiting api functions with ip adresses using `@unkey/ratelimit`
6. Gracious error handling with error.tsx and not-found.tsx files
7. Proper error logging and analyzing with Sentry

## TODO

- [⚠️] Fix env.t3.gg problems in next.config.js
