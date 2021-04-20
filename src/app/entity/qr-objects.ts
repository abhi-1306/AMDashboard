export class QR{

    text: string;
    imageBased64: string;

    constructor(text:string,imageBased64:string){

        this.imageBased64= imageBased64;
        this.text=text;
    }

}