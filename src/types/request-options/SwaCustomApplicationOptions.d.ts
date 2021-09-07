declare interface SwaCustomApplicationOptions {
  accessibility?: {
    selfService?: boolean;
    errorRedirectUrl?: string;
    loginRedirectUrl?: string;
  };
  features?: string[];
  credentials?: {
    scheme?: string; /* 'EXTERNAL_PASSWORD_SYNC' */
    userNameTemplate?: {
      template: string;
      type: string;
    };
    revealPassword?: false;
    signing?: Record<string, unknown>;
  };
  settings: {
    notifications?: {
      vpn?: {
        network?: {
          connection?: string;
        };
        message?: string;
        helpUrl?: string;
      };
    };
    signOn: {
      redirectUrl?: string;
      loginUrl: string;
    };
  };
  signOnMode: string; /* 'AUTO_LOGIN' */
  visibility: {
    autoSubmitToolbar?: boolean;
    hide?: {
      iOS?: boolean;
      web?: boolean;
    };
  };
}

export {
  SwaCustomApplicationOptions
};
