import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-OrderDetails',
  templateUrl: './OrderDetails.component.html',
  styleUrls: ['./OrderDetails.component.css']
})

export class OrderDetailsComponent implements OnInit {
  orderObj: any = [];
  orderId:any;
  ObjectKeys = Object.keys;
  Total:number = 0;
  constructor(private ActivatedRoute:ActivatedRoute,private orderService :OrderService) { 
    this.orderId= ActivatedRoute.snapshot.params["id"];
    
  }
  
  ngOnInit() {
    this.orderService.GetOrderDetails(this.orderId).subscribe(
      (data)=>{
        this.orderObj = data;
        console.log(this.orderObj)
        //console.log(this.orderObj[orderProducts])
        for(var i=0;i<this.orderObj[0].orderProducts.length;i++ ){

          this.Total = this.Total + (Number(this.orderObj[0].orderProducts[i].amount) * Number(this.orderObj[0].orderProducts[i].price));

        }
      },
      (err)=>{console.log(err)}
    )
  }
}
