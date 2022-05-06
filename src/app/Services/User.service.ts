import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private HttpClient :HttpClient) { }
BaseURL="https://localhost:7154";

Register(user:any){
  return this.HttpClient.post(`${this.BaseURL}/api/Auth/Register`,user);
}
Login(user:any){
  return this.HttpClient.post(`${this.BaseURL}/api/Auth/Login`,user);
}

}
