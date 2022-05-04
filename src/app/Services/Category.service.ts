import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient :HttpClient) { }
BaseURL="https://localhost:7154/api/Category";

GetAllCategories(){
  return this.HttpClient.get(this.BaseURL);
}

GetCategoryById(id:any){
  return this.HttpClient.get(`${this.BaseURL}/${id}`);
}
AddNewCategory(Category:any){
  return this.HttpClient.post(this.BaseURL,Category);
}
UpdateCategoryById(id:any,Category:any){
  return this.HttpClient.put(`${this.BaseURL}/${id}`,Category);
}
DeleteCategory(id:any){
  return this.HttpClient.delete(`${this.BaseURL}/${id}`);
}
}