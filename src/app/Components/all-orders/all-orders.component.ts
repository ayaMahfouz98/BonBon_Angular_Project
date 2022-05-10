import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor(private ordeService:OrderService,private userService:UserService) { }

orders:any;
State:any;
ID:any;
User:any;

  ngOnInit(): void {
    this.ordeService.GetAllOrders().subscribe(
      (data)=>
      {
        this.orders=data;
        console.log(this.orders)
        for(let order of this.orders)
        {
          this.userService.GetUserById(order.userId).subscribe(
            (data)=>{
                this.User = data;
                //console.log(this.User)
            },
            (err)=>
            {
              console.log(err);
            }
          )
        }
      },
      (err)=>
      {
        console.log(err)
      }
    )
  }

}
