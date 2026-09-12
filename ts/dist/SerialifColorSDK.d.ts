import { GetColorByPathEntity } from './entity/GetColorByPathEntity';
import { GetColorByQueryEntity } from './entity/GetColorByQueryEntity';
export type * from './SerialifColorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SerialifColorEntityBase } from './SerialifColorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SerialifColorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetColorByPath(entopts?: Record<string, any>): GetColorByPathEntity;
    GetColorByQuery(entopts?: Record<string, any>): GetColorByQueryEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SerialifColorSDK;
    tester(testopts?: any, sdkopts?: any): SerialifColorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SerialifColorSDK;
export { stdutil, config, BaseFeature, SerialifColorEntityBase, SerialifColorSDK, SDK, };
