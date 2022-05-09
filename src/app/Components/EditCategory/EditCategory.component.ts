import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-EditCategory',
  templateUrl: './EditCategory.component.html',
  styleUrls: ['./EditCategory.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryId:any;
  category:any;

  constructor(private ActivatedRoute:ActivatedRoute,private CategoryServise:CategoryService,private router:Router) {
    this.categoryId= ActivatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.CategoryServise.GetCategoryById(this.categoryId).subscribe(
      (data)=>{
        this.category=data;
        console.log(this.category)
      },
      (err)=>{console.log(err)}
    );

  }

  Edit(name:any){
    let category={
      "id":this.categoryId,
      "name": name,
    }
    this.CategoryServise.UpdateCategoryById(this.categoryId,category).subscribe();
    //this.router.navigate(['/AllCategories']);

  }

}
