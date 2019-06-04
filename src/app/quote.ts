export class Quote {
    public showDescription:boolean;
    constructor(public quote:string, public author:string, public name:string, public upVote: number, public downVote: number, public datePosted:Date){
        this.showDescription=false;
    }
}
