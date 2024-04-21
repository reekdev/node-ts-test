import z from 'zod';
import { loadEnvironmentVars } from './loadEnvironmentVars';

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, 'PORT must be a numeric value')
    .transform((value) => parseInt(value, 10))
    .refine(
      (port) => port >= 0 && port < 65536,
      'PORT must be within a range of 0-65535'
    ),
  API_VERSION: z
    .string()
    .regex(/^api\/v\d+$/, 'API_VERSION must follow the format `api/v<number>`'),
});

(function checkEnvironmentVars() {
  loadEnvironmentVars();
})();

export const env = envSchema.parse(process.env);
