import { SerialifColorEntityBase } from '../SerialifColorEntityBase';
import type { SerialifColorSDK } from '../SerialifColorSDK';
import type { Control } from '../types';
import type { GetColorByPath, GetColorByPathLoadMatch } from '../SerialifColorTypes';
declare class GetColorByPathEntity extends SerialifColorEntityBase<GetColorByPath> {
    constructor(client: SerialifColorSDK, entopts: any);
    make(this: GetColorByPathEntity): GetColorByPathEntity;
    load(this: any, reqmatch?: GetColorByPathLoadMatch, ctrl?: Control): Promise<GetColorByPathEntity>;
}
export { GetColorByPathEntity };
