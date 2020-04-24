import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next:NextFunction) => {
  req.headers = {
    institution: '136',
    organization: '566',
  };

  return next();
};
