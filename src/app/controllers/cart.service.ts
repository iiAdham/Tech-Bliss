import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApifunctionsService<cart> {

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/cart', http);
  }
}
