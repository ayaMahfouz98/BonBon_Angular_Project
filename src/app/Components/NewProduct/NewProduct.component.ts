import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-NewProduct',
  templateUrl: './NewProduct.component.html',
  styleUrls: ['./NewProduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor( private service:ProductsService) { }

  ngOnInit() {
  }

  Addd(){
    let product={}
    this.service.AddNewProduct(product).subscribe()
  }


}
