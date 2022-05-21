import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from 'src/app/Services/Order.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-UserOrder',
  templateUrl: './UserOrder.component.html',
  styleUrls: ['./UserOrder.component.css']
})
export class UserOrderComponent implements OnInit {
  constructor(private userService: UserService, private orderService :OrderService ,private router:Router,private modalService:NgbModal) {
    this.ID=this.userService.UserId;

   }
  userOrders:any;
  selectedOrderID:any; 
   ID:any;
   closeResult='';

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

  open(content: any) {
    //console.log(content)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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