class HttpError extends Error{
    constructor(message? : string){
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Status code: 401
 */
export class UnauthorizedError extends HttpError{}

export class ConflictError extends HttpError{}