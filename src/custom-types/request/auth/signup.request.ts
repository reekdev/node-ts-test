import { SignupDTO } from '@dto/auth/signup.dto';
import type { Request } from 'express';

export type SignupRequest = Request<{}, {}, SignupDTO, { gender: 'M' | 'F' }>;
