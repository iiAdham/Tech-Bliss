import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent {
  popularProducts: products[] = [];

  constructor(public productApi: ProductsService) {
    this.productApi.get().subscribe((res: any) => {
      res.forEach((element: any) => {
        if (element.isPopular) {
          this.popularProducts.push(element);
        }
      });

    })
    console.log(this.popularProducts);

  }
}
