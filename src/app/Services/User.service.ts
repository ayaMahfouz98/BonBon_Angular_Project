import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isloggedSubject: BehaviorSubject<boolean>;
  private email: BehaviorSubject<any>;

constructor(private HttpClient :HttpClient) { 
  this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged);
  this.email = new BehaviorSubject<any>(this.UserEmail);

}
BaseURL="https://localhost:7154";

Register(user:any){
  return this.HttpClient.post(`${this.BaseURL}/api/Auth/Register`,user);
}
Login(user:any){
  this.isloggedSubject.next(true);
  return this.HttpClient.post(`${this.BaseURL}/api/Auth/Login`,user);

}

Logout()
{
  this.isloggedSubject.next(false);
  return this.HttpClient.get(`${this.BaseURL}/api/Auth/Logout`);
}

GetUserByEmailforRegister(user: {}){
  return this.HttpClient.post(`${this.BaseURL}/api/UserProfile/GetUserByEmailforRegister`,user);
}

GetUserByEmailforLogin(user: {}){
  return this.HttpClient.post(`${this.BaseURL}/api/UserProfile/GetUserByEmailforLogin`,user);
}

GetUserProfile(email:any){
  return this.HttpClient.get(`${this.BaseURL}/api/UserProfile/GetUser/${email}`);
}

EditUserProfile(email:any,user:any)
{
  return this.HttpClient.put(`${this.BaseURL}/api/UserProfile/EditUser/${email}`,user);
}

DeleteUserProfile(email:any,user:any)
{
  return this.HttpClient.delete(`${this.BaseURL}/api/UserProfile/DeleteUser/${email}`);
}

GetAllUsers()
{
  return this.HttpClient.delete(`${this.BaseURL}/api/UserProfile/GetAllUsers`);
}
get isUserLogged(): boolean
{
  return  (localStorage.getItem('token'))? true: false
}

get UserEmail(): any
{
  
  return localStorage.getItem('email');
}

getloggedStatus(): Observable<boolean>
{
  return this.isloggedSubject.asObservable();
}
}
