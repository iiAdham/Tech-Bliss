import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user_panel/main/home/home.component';
import { MobilesComponent } from './user_panel/main/mobiles/mobiles.component';
import { HeadphonesComponent } from './user_panel/main/headphones/headphones.component';
import { WatchesComponent } from './user_panel/main/watches/watches.component';
import { LaptopsComponent } from './user_panel/main/laptops/laptops.component';
import { ProductsComponent } from './user_panel/main/products/products.component';
import { ProductDetailsComponent } from './user_panel/main/product-details/product-details.component';
import { CartComponent } from './user_panel/main/cart/cart.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { AddComponent } from './admin_panel/main/products/add/add.component';
import { ListComponent } from './admin_panel/main/products/list/list.component';
import { EditComponent } from './admin_panel/main/products/edit/edit.component';

const routes: Routes = [
  { path: '', title: 'Tech Bliss | Home', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'mobiles', title: 'Tech Bliss | Mobiles', component: MobilesComponent },
  { path: 'headphones', title: 'Tech Bliss | Headphones', component: HeadphonesComponent },
  { path: 'watches', title: 'Tech Bliss | Smartwatches', component: WatchesComponent },
  { path: 'laptops', title: 'Tech Bliss | Laptops', component: LaptopsComponent },
  { path: 'products', title: 'Tech Bliss | All products', component: ProductsComponent },
  { path: 'details/:id', title: 'Tech Bliss | Product details', component: ProductDetailsComponent },
  { path: 'cart', title: 'Tech Bliss | Cart', component: CartComponent },
  {
    path: 'admin', children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', title: 'Tech Bliss | Admin', component: DashboardComponent },
      {
        path: 'products', children: [
          { path: 'add', title: 'Tech Bliss | Add new product', component: AddComponent },
          { path: 'list', title: 'Tech Bliss | Products list', component: ListComponent },
          { path: 'edit/:id', title: 'Tech Bliss | Edit product', component: EditComponent },
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
