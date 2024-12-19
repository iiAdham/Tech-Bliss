import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent {
  headphones: products[] = [];
  constructor(public prodApi: ProductsService) {
    this.prodApi.get().subscribe((res: any) => {
      res.forEach((element: products) => {
        if (element.category == "headphone") {
          this.headphones.push(element);
        }
      });
    })
  }
}
