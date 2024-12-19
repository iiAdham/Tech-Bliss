import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  laptops: products[] = [];
  constructor(public prodApi: ProductsService) {
    this.prodApi.get().subscribe((res: any) => {
      res.forEach((element: products) => {
        if (element.category == "laptops") {
          this.laptops.push(element);
        }
      });
    })
  }
}
