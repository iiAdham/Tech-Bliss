import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "")
  Products: products[] = [];
  constructor(public api: ProductsService, private router: Router) {
    if (!this.loggedIn) {
      this.router.navigateByUrl("/notFound");
    } else {
      this.getAllData();
    }
  }

  getAllData() {
    this.api.get().subscribe((res: any) => {
      this.Products = res;
    })
  }

  delete(id: any) {
    this.api.delete(id).subscribe((res: any) => {
      this.getAllData();
    })
  }
}
