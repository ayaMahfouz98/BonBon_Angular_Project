import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private HttpClient :HttpClient) { }
BaseURL="https://localhost:7154/api/Auth";

Register(user:any){
  return this.HttpClient.post(`${this.BaseURL}/Rsgister`,user);
}

}
