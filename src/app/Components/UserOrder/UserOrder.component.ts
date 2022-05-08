import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';

@Component({
  selector: 'app-UserOrder',
  templateUrl: './UserOrder.component.html',
  styleUrls: ['./UserOrder.component.css']
})
export class UserOrderComponent implements OnInit {
  constructor( private orderService :OrderService ) { }
  userOrders:any;

  ngOnInit() {
   this.orderService.GetOrdersByUserId("ca425ef0-c490-48f5-8eb6-e468f85f1890").subscribe(
     (data)=>{console.log("dddddddddd"+data)
               this.userOrders=data ;},
     (err)=>{console.log(err)}
   );
  }
}
