import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-AllCategories',
  templateUrl: './AllCategories.component.html',
  styleUrls: ['./AllCategories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  AllCategories:any;

  constructor(private CategoryService:CategoryService) {

   }
   refrech(){
    window.location.reload() ;
   }

  ngOnInit() {
    this.CategoryService.GetAllCategories().subscribe(
      (data) => {
        console.log(data);
        this.AllCategories = data;
      },
      (err) => {
        console.log(err);
      }
    );

  }
  Delete(id:any){
  this.CategoryService.DeleteCategory(id).subscribe();
  window.location.reload();
  }

}
