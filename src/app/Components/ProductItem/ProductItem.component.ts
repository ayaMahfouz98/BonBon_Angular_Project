import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-ProductItem',
  templateUrl: './ProductItem.component.html',
  styleUrls: ['./ProductItem.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private service:ProductsService,private router: Router) { }

  ngOnInit() {
  }
@Input() Product:any;


Delete(id:any){
  this.service.DeleteProduct(id).subscribe();
  // this.router.navigate(['/Products']);
  window.location.reload();

}

}
