import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'
import { styles } from '../../../mapstyles';
import { Router } from "@angular/router";
import { OrderService } from 'src/app/Services/Order.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-CompleteOrder',
  templateUrl: './CompleteOrder.component.html',
  styleUrls: ['./CompleteOrder.component.css']
})
export class CompleteOrderComponent implements OnInit {
  totalPlusShipping:any;
  total:any;

  addAddress = new FormGroup({
    street: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    govern: new FormControl('',Validators.required)
  })

  get street(){return this.addAddress.get('street')}
  get city(){return this.addAddress.get('city')}
  get govern(){return this.addAddress.get('govern')}
  constructor(private orderService :OrderService,private router: Router/* private map: google.maps.Map*/) { 
     this.orderService.GetOrderTotal(localStorage.getItem('cartToken')).subscribe(
       (r)=>{
        this.total = r
        this.totalPlusShipping  = ((+this.total * 0.1) + (+this.total)+ (+this.total*0.05)).toString()
        console.log(this.totalPlusShipping)
        render({
           id:"#paypal",
           currency:"USD",
           value: this.totalPlusShipping,
           onApprove:(details)=>{
             this.CompleteOrder();
            }
    
        })
       })
  }
  CompleteOrder(){
    this.orderService.CompleteOrder(localStorage.getItem('email'),localStorage.getItem('cartToken')).subscribe();
    this.orderService.DeleteShoppingCart(localStorage.getItem('cartToken')).subscribe();
    this.router.navigate(['/OrderPlaced']);
  }

  ngOnInit() {

    /**Googl map */
    /*
    let loader = new Loader({
      apiKey: '###yourapikey###',
    });
 
    loader.load().then(() => {
      console.log('loaded gmaps')
 
      const location = { lat: 51.233334, lng: 6.783333 }
      
      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 6,
        styles: styles
      })
 
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })*/
  }

}
