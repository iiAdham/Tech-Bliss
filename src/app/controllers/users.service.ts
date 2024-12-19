import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { users } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApifunctionsService<users> {

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/users', http);
  }
}
