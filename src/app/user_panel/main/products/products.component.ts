import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Products: products[] = [];
  background: any;
  constructor(private api: ProductsService) {
    this.api.get().subscribe((data: any) => {
      this.Products = data
    });
  }
}
