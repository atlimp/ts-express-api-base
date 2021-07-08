import HttpException from "../exceptions/httpexception";
import { User } from "../interfaces/interfaces";

export function isHttpException(test: any): test is HttpException {
    return (test as HttpException).status !== undefined;
}

export function isUser(test: any): test is User {
    return (test as User).email !== undefined;
}