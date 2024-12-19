import { Component } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent {
  smartwatches: products[] = [];
  constructor(public prodApi: ProductsService) {
    this.prodApi.get().subscribe((res: any) => {
      res.forEach((element: products) => {
        if (element.category == "smartwatches") {
          this.smartwatches.push(element);
        }
      });
    })
  }
}
