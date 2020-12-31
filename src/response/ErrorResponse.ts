export class ErrorResponse {

    public errorMessage: string;
    public msgException: string;

    constructor(errorMessage: string, msgException: string) {
        this.errorMessage = errorMessage;
        this.msgException = msgException;
     }
}
