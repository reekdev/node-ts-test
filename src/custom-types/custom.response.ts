import { Response } from 'express';

type SuccessResponse = {
  status: 'success';
  data: any;
};

type FailedResponse = {
  status: 'fail';
  data: any;
};

type ErrorResponse = {
  status: 'error';
  errors: Array<Record<string, any>>;
  data?: any;
};

type ResponseBody = SuccessResponse | FailedResponse | ErrorResponse;

export type StandardResponse = Response<ResponseBody>;
