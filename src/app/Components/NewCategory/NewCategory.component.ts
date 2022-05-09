import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-NewCategory',
  templateUrl: './NewCategory.component.html',
  styleUrls: ['./NewCategory.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private CategoyService:CategoryService) { }

  ngOnInit() {
  }

  Add(name:any){
    let product={
      "name": name,
    }
    this.CategoyService.AddNewCategory(product).subscribe();
  }

}
