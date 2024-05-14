import type { Request } from 'express';
import { SignupDTO } from '../../../dto/auth/signup.dto';

export type SignupRequest = Request<{}, {}, SignupDTO, { gender: 'M' | 'F' }>;
