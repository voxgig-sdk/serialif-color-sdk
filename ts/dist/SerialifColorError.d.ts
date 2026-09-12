import { Context } from './Context';
declare class SerialifColorError extends Error {
    isSerialifColorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SerialifColorError };
