import { Shopper } from "./shopper.model";

export class dataSource{
    private shoppers: Shopper[]

    constructor(){
        //shopper lists
        this.shoppers = new Array<Shopper>(
            new Shopper(1,"XinBao Chen",'xinbaochen321@gmail.com',1,14)
        )
    }
    getShopper():Shopper[]{
        return this.shoppers
    }
    addShooper(shopper:Shopper){
        this.shoppers.push(shopper)
    }
}