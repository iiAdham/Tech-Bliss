import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { products } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApifunctionsService<products> {

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/products', http);
  }
}
