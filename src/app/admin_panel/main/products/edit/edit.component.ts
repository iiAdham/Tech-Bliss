import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/controllers/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product = new products();
  id !: any;
  loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "")

  constructor(private activ: ActivatedRoute, private prodApi: ProductsService, private router: Router) {
    if (!this.loggedIn) {
      this.router.navigateByUrl("/notFound");
    }
    else {
      this.id = this.activ.snapshot.params['id'];
      this.prodApi.getById(this.id).subscribe((res: any) => {
        this.product = res;
      })
    }
  }

  update(id: any) {
    this.prodApi.put(id, this.product).subscribe((res: any) => {
      this.router.navigateByUrl("/admin/products/list");
    })
  }
}
