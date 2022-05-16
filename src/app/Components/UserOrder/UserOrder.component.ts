import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from 'src/app/Services/Order.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-UserOrder',
  templateUrl: './UserOrder.component.html',
  styleUrls: ['./UserOrder.component.css']
})
export class UserOrderComponent implements OnInit {
  constructor(private userService: UserService, private orderService :OrderService ,private router:Router) {
    this.ID=this.userService.UserId;

   }
  userOrders:any;
  selectedOrderID:any; 
   ID:any;


  ngOnInit() {
    //==>HERE
    //to b updated in my profile 
    //add autho
   this.orderService.GetOrdersByUserId(this.ID).subscribe(
     (data)=>{console.log(data)
               this.userOrders=data ;
             },
     (err)=>{console.log(err)}
   );
  }
  openOrderDetails(prdId:number){
    this.router.navigate(['/OrderDetails/',prdId])
  }

CancelOrder(id:any)
  {
  this.orderService.DeleteOrder(id).subscribe();
  window.location.reload();    
}
}