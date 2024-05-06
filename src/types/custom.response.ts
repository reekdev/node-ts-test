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
  errors: any[];
  data?: any;
};

export type CustomResponse = SuccessResponse | FailedResponse | ErrorResponse;
