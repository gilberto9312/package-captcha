declare global {
    interface Window {
        grecaptcha: any;
    }
}
export default class Recaptcha {
    siteKey: string;
    action: string;
    constructor(siteKey: string, action: string);
    getToken(): Promise<string>;
}
