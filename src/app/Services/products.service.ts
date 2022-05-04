import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient :HttpClient) { }

  BaseURL="https://localhost:7154/api/Products";

  GetAllProducts(){
    return this.HttpClient.get(this.BaseURL);
  }

  GetProductById(id:any){
    return this.HttpClient.get(`${this.BaseURL}/${id}`);
  }
  AddNewProduct(product:any){
    return this.HttpClient.post(this.BaseURL,product);
  }
  UpdateProductById(id:any,product:any){
    return this.HttpClient.put(`${this.BaseURL}/${id}`,product);
  }
  DeleteProduct(id:any){
    return this.HttpClient.delete(`${this.BaseURL}/${id}`);
  }
  GetProductWithPromotion(){
    return this.HttpClient.get(`${this.BaseURL}/GetProductsWithPormotion`);
  }

}
