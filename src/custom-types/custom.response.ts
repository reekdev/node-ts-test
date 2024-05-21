import type { Response } from 'express';
import { ErrorCode } from '../error/error-codes.enum';

type SuccessResponse = {
  status: 'success';
  data: any;
};

type FailedResponse = {
  status: 'fail';
  data: any;
};

type ErrorContent = {
  message: string;
  context?: Record<string, any> | string;
};

type ErrorResponse = {
  status: 'error';
  code: ErrorCode;
  errors: ErrorContent[];
};

type ResponseBody = SuccessResponse | FailedResponse | ErrorResponse;

export type StandardResponse = Response<ResponseBody>;
