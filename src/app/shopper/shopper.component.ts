import { Component } from '@angular/core';
import { Shopper } from './shopper.model';
import { ShopperRepository } from './repository.model';

@Component({
  selector: 'shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css']
})
export class ShopperComponent {
  quantity: number = 1;
  itemsLeft: number = 10;
  shopper: Shopper = new Shopper(1, "Product Name", "email@example.com", 10, 19.99);

  addToCart() {
    if (this.quantity <= this.itemsLeft) {
      this.itemsLeft -= this.quantity;
      // Add the item to the cart or perform other operations
    } else {
      console.log("Not enough items left.");
    }
  }

}