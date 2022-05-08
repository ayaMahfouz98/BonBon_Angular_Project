import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private HttpClient :HttpClient) { }

  BaseURL="https://localhost:7154/api/Orders";

  GetAllOrders(){
    return this.HttpClient.get(this.BaseURL);
  }

  GetShoppingCartItems(){
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCartItems`);
  }
  
  AddToShoppingCart(id:any){
    return this.HttpClient.post(`${this.BaseURL}/AddItem/`,id);
  }

  RemoveItemFromShoppingCart(id:any){
    return this.HttpClient.post(`${this.BaseURL}/RemoveItem/`,id);
  }

  CompleteOrder(id:any){
  return this.HttpClient.post(`${this.BaseURL}/completerOrder/`,id);
  }
  ChangeOrderState (id:any){
  return this.HttpClient.post(`${this.BaseURL}/changeOrderStateById/`,id);
  }
 
  GetOrdersByUserId(id:any){
    return this.HttpClient.get(`${this.BaseURL}/GetOrdersByUserId/${id}`);
  }
  

}
