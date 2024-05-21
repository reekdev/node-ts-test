import type { Request, Response, NextFunction } from 'express';

const blockedUserAgentList = ['PostmanRuntime'];

const blockUserAgent = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      for (let i = 0; i < blockedUserAgentList.length; ++i) {
        if (req.get('User-Agent')?.startsWith(blockedUserAgentList[i] as string)) {
          throw new Error('User Agent blocked');
        }
      }
      next();
    } catch (error) {
      return next(error);
    }
  };
};

export { blockUserAgent };
