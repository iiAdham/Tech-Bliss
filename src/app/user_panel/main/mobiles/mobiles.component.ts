import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  phones: products[] = [];
  constructor(public prodApi: ProductsService) {
    this.prodApi.get().subscribe((res: any) => {
      res.forEach((element: products) => {
        if (element.category == "phone") {
          this.phones.push(element);
        }
      });
    })
  }
}
