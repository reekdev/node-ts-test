import type { Request, Response, NextFunction } from 'express';

type AsyncCallbackFunction<
  CustomRequest extends Request = Request,
  CustomResponse extends Response = Response
> = (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction
) => Promise<void>;

const asyncErrorHandler = <
  CustomRequest extends Request = Request,
  CustomResponse extends Response = Response
>(
  callbackFn: AsyncCallbackFunction<CustomRequest, CustomResponse>
) => {
  return (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
    callbackFn(req, res, next).catch((err: any) => next(err));
  };
};

export default asyncErrorHandler;
