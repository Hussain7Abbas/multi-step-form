import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    AUTH_TOKEN_EXPIRATION: process.env.AUTH_TOKEN_EXPIRATION,
  },

  server: {
    JWT_SECRET_KEY: z.string(),
    AUTH_TOKEN_EXPIRATION: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },
});
