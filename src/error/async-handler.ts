import type { Request, Response, NextFunction } from 'express';

type AsyncCallbackFunction = (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction
) => Promise<void>;

const asyncHandler = (callbackFn: AsyncCallbackFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    callbackFn(req, res, next).catch((err: any) => next(err));
  };
};

export default asyncHandler;
