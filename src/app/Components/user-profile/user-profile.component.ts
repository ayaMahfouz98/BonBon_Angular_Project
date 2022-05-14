import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';
import { UserService } from 'src/app/Services/User.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Email: any;
  Gender:any;
  User:any;
  ID:any;
  Orders:any;
  closeResult='';
  State:any;

  constructor(private modalService: NgbModal,private userservice:UserService,private orderservice:OrderService, private router:Router) { 
    this.Email=this.userservice.UserEmail;
    this.ID=this.userservice.UserId;
    //console.log(this.ID)
    //console.log(this.Email)
  }


  ngOnInit(): void {
    this.userservice.GetUserProfile(this.Email).subscribe(
      (data)=>
      {
        this.User=data;
        if(this.User.gender==0)
        {
          this.Gender='Male';
        }
        else 
        {
          this.Gender='Female';

        }
      },
      (err)=>
      {
        console.log(err)
      }
    )

    this.orderservice.GetOrdersByUserId(this.ID).subscribe(
      (data:any)=>
      {
        console.log(data)
        for( let order of data){
        if(order.state==0)
           this.State="Pending"
        else if(order.State==1)
           this.State="Accepted"
        else if(order.state==2)
           this.State="Rejected"
        this.Orders=data;
        }
      },
      (err)=>
      {
        console.log(err)
      }
    )
  }

  open(content:any) {
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  SaveData(
    username:any,
    email:any,
    image:any,
  )
  {
    //console.log(image)
    //console.log(this.User.profileImage)
    this.userservice.EditUserProfile(this.ID,{Id:this.ID,username:username,email:email,profileImage:image}).subscribe();
    window.location.reload();    
  }

}