import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-OrderDetails',
  templateUrl: './OrderDetails.component.html',
  styleUrls: ['./OrderDetails.component.css']
})

export class OrderDetailsComponent implements OnInit {
  ID:any;
  orderObj: any = [];
  orderId:any;
  ObjectKeys = Object.keys;
  Total:number = 0;
  constructor(private ActivatedRoute:ActivatedRoute, private userservice:UserService, private orderService :OrderService) {
    this.ID=this.userservice.UserId;
    this.orderId= ActivatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.orderService.GetOrderDetails(this.orderId).subscribe(
      (data)=>{
        this.orderObj = data;
        console.log(this.orderObj)
        //console.log(this.orderObj[orderProducts])
    
        this.Total = this.orderService.PrdListTotalCost(this.orderObj[0].orderProducts)
      },
      (err)=>{console.log(err)}
    )
  }
}
