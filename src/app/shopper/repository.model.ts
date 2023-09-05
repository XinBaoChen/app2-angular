import { Shopper } from "./shopper.model";
import { dataSource } from "./dataSource.model";

export class ShopperRepository{
    private dataSorce = new dataSource
    private shoppers: Shopper[] = [];

    constructor(){
        this.dataSorce = new dataSource()
        this.shoppers = new Array<Shopper>()
        this.dataSorce.getShopper().forEach(s =>this.shoppers.push(s))
    }
    getShoppers(){
        return this.shoppers
    }
    addToCart(shopper: Shopper) {
        const itemIndex = this.shoppers.findIndex((s) => s.id === shopper.id);
        if (itemIndex !== -1) {
          const selectedShopper = this.shoppers[itemIndex];
          if (selectedShopper?.quantity && selectedShopper.quantity > 0) {
            selectedShopper.quantity--;
            // Add the shopper to the cart or perform other operations
          } else {
            console.log("No more items left for this product.");
          }
        }
    }
}