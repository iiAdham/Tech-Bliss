import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user_panel/shared/navbar/navbar.component';
import { HomeComponent } from './user_panel/main/home/home.component';
import { PopularProductsComponent } from './user_panel/main/popular-products/popular-products.component';
import { BrandsComponent } from './user_panel/main/brands/brands.component';
import { FooterComponent } from './user_panel/shared/footer/footer.component';
import { MobilesComponent } from './user_panel/main/mobiles/mobiles.component';
import { HeadphonesComponent } from './user_panel/main/headphones/headphones.component';
import { WatchesComponent } from './user_panel/main/watches/watches.component';
import { LaptopsComponent } from './user_panel/main/laptops/laptops.component';
import { ProductsComponent } from './user_panel/main/products/products.component';
import { ProductDetailsComponent } from './user_panel/main/product-details/product-details.component';
import { CartComponent } from './user_panel/main/cart/cart.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { HeaderComponent } from './admin_panel/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './admin_panel/main/products/add/add.component';
import { ListComponent } from './admin_panel/main/products/list/list.component';
import { EditComponent } from './admin_panel/main/products/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PopularProductsComponent,
    BrandsComponent,
    FooterComponent,
    MobilesComponent,
    HeadphonesComponent,
    WatchesComponent,
    LaptopsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    DashboardComponent,
    HeaderComponent,
    AddComponent,
    ListComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
