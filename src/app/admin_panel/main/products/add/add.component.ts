import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  product = new products();
  loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "")

  constructor(public api: ProductsService, private router: Router) {
    if (!this.loggedIn) {
      this.router.navigateByUrl("/notFound");
    }
  }
  addProd(available: any) {
    this.api.post(this.product).subscribe((res: any) => {
      this.router.navigateByUrl("/admin/products/list")
    })
  }
}
