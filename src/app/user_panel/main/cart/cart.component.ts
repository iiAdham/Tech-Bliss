import { products } from './../../../models/products';
import { Component } from '@angular/core';
import { CartService } from 'src/app/controllers/cart.service';
import { ProductsService } from 'src/app/controllers/products.service';
import { cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userId = JSON.parse(localStorage.getItem('user_id') || '0');

  cartItems: cart[] = [];
  Products: products[] = [];

  totalCart = 0;

  prices: any[] = [];

  constructor(private cartApi: CartService, private productApi: ProductsService) {
    this.getAllitems();

  }
  quantify(value: string, id: any) {
    if (value == 'min' && this.cartItems[id].quantity > 1) {
      this.cartItems[id].quantity--;
      for (let i = 0; i < this.Products.length; i++) {
        this.prices[i] = this.Products[i].product_price * this.cartItems[i].quantity;
      }

    } else if (value == 'max') {
      this.cartItems[id].quantity++;
      for (let i = 0; i < this.Products.length; i++) {
        this.prices[i] = this.Products[i].product_price * this.cartItems[i].quantity;
      }
    }
    this.totalCart = 0;
    this.prices.forEach((element: any) => {
      this.totalCart += element;
    });
  }

  getAllitems() {
    this.cartItems = [];
    this.Products = [];
    this.prices = [];
    this.totalCart = 0;

    this.cartApi.get().subscribe((res: any) => {

      res.forEach((element: any) => {
        this.cartItems.push(element);
        if (element.user_id == this.userId) {
          this.productApi.getById(element.product_id).subscribe((data: any) => {
            this.prices.push(data.product_price);
            this.totalCart += data.product_price;
            this.Products.push(data);
          })
        }

      });

    })


  }

  deleteItem(id: any) {
    this.cartApi.delete(id).subscribe((res: any) => {
      this.getAllitems();
    })
  }

}
