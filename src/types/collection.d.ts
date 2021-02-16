export = Collection;

import Request from './request';

declare class Collection {
    constructor(client: any, uri: string, factory: any, request?: Request);
    nextUri: string;
    client: any;
    factory: any;
    currentItems: any[];
    request: Request;
    next(): Promise<any>;
    [Symbol.asyncIterator](): {
        next: () => Promise<any>;
    };
    getNextPage(): any;
    each(iterator: Function): any;
    subscribe(config: {
        interval: number;
        next: Function;
        error: Function;
        complete: Function;
    }): {
        unsubscribe(): void;
    };
}
