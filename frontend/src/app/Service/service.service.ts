import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  service_url = "http://localhost:8080/spring-api/user";

  getUser()
  {
    return this.http.get<User[]>(this.service_url);
  }
}
