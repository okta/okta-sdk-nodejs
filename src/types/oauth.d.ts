declare class OAuth {
    constructor(client: any);
    client: any;
    accessToken: any;
    getAccessToken(): any;
    clearCachedAccessToken(): void;
    getJwt(endpoint: any): any;
}

export default OAuth;