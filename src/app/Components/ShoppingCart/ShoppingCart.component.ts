import { Component, OnInit,OnChanges } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges {
  shoppingCartItems:any;
  currentshoppingCart:any;
  cartNotEmpty:any;
  recievedOrderPrice:any  = 0;

  constructor( private orderService :OrderService,private modalService:NgbModal ) { 
    if(this.orderService.shoppingCartExists == false){
      this.orderService.GetShoppingCart().subscribe(
        (data:any)=>{
          this.currentshoppingCart = data;
          localStorage.setItem('cartToken', data)
        });
     }
  }


  ngOnInit() {

    this.orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe(
      (data:any)=>{
        this.shoppingCartItems=data;
        if(this.shoppingCartItems.length!=0){
          this.cartNotEmpty = true;
          this.recievedOrderPrice =  this.orderService.PrdListTotalCost(this.shoppingCartItems);
        }
      }
      )}
      
  ngOnChanges(){}


open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
onAmountChange(totalPriceOnChange:number){
  this.recievedOrderPrice += totalPriceOnChange;
}

}