import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
//import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-Promotions',
  templateUrl: './Promotions.component.html',
  styleUrls: ['./Promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  constructor(private service:ProductsService) { }
  AllProductsWithPormotion:any;
  ngOnInit() {
    this.service.GetProductWithPromotion().subscribe(
      (data)=>{
      this.AllProductsWithPormotion=data;
    },
      (err)=>{});
}
customOptions: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 4
    },
    740: {
      items: 4
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}
