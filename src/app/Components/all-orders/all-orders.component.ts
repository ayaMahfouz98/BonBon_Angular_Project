import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/Services/Order.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})

export class AllOrdersComponent implements OnInit {

  constructor(private modalService: NgbModal, private ordeService: OrderService, private userService: UserService) { }

  orders: any;
  Status = "Order Status";
  ID: any;
  User: any;
  closeResult = '';
  Order: any;

  StatusArr = ['Order Status', 'Pending', 'Accepted', 'Canceled'];

  ngOnInit(): void {
    this.ordeService.GetAllOrders().subscribe(
      (data) => {
        this.orders = data;
        for (let order of this.orders) {
          this.userService.GetUserById(order.userId).subscribe(
            (data) => {
              this.User = data;
            },
            (err) => {
              console.log(err);
            }
          )
        }
      },
      (err) => {
        console.log(err)
      }
    )
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

  SaveData(id: any) {
    var status: any;
    if (this.Status == 'Pending') {
      status = 0;
    }
    else if (this.Status == 'Accepted') {
      status = 1;
    }
    else if (this.Status == 'Canceled') {
      status = 2;
    }
    console.log(status);

    this.ordeService.ChangeOrderState(id, status).subscribe();

    window.location.reload();
  }

  selectChange() {
    console.log(this.Status)
  }

}
