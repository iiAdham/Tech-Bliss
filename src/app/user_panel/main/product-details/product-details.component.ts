import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/controllers/cart.service';
import { ProductsService } from 'src/app/controllers/products.service';
import { cart } from 'src/app/models/cart';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product = new products();
  id!: any;
  cartItem = new cart();

  constructor(private prodApi: ProductsService, private activatedRoute: ActivatedRoute, private cartApi: CartService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.prodApi.getById(this.id).subscribe((res: any) => {
      this.product = res;
      this.cartItem.user_id = localStorage.getItem("user_id");
      this.cartItem.product_id = this.product.id;
      this.cartItem.quantity = 1;
    })

  }

  addToCart() {
    this.cartApi.post(this.cartItem).subscribe(() => {
      alert('Product added to cart');
    });
  }

  imgClick(img1: any, img2: any) {
    var temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
  }
}
