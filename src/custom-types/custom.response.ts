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

type CustomResponse = SuccessResponse | FailedResponse | ErrorResponse;

export { CustomResponse };
