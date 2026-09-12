import { SerialifColorEntityBase } from '../SerialifColorEntityBase';
import type { SerialifColorSDK } from '../SerialifColorSDK';
import type { Control } from '../types';
import type { GetColorByQuery, GetColorByQueryLoadMatch } from '../SerialifColorTypes';
declare class GetColorByQueryEntity extends SerialifColorEntityBase<GetColorByQuery> {
    constructor(client: SerialifColorSDK, entopts: any);
    make(this: GetColorByQueryEntity): GetColorByQueryEntity;
    load(this: any, reqmatch?: GetColorByQueryLoadMatch, ctrl?: Control): Promise<GetColorByQueryEntity>;
}
export { GetColorByQueryEntity };
