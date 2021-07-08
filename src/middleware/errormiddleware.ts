import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/httpexception';

export default function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const { status = 500, message = 'Something went wrong' }: { status: number, message: string } = error;

    console.error(req.path, req.method, error);

    res.status(status).json({ status, message });
}