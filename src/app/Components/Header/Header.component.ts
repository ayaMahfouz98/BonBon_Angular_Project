import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {

  Pname: string = 'Search';
  CategoryId:any;

  @Output() myEvent = new EventEmitter();

  constructor(private router:Router, private CategoryService: CategoryService ,private activatedRoute:ActivatedRoute)
  {

  }
  AllCategories: any;

  ngOnChanges(): void {
    this.SendName(this.Pname);
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

  SendName(Pname: string) {
    console.log(Pname);
    if (Pname == '') {
      this.router.navigate(['/Products']);
    } else {
      this.myEvent.emit(Pname);
      this.router.navigate([`/searchProduct/${Pname}`]);
    }
  }

  GetProductByCategory(){
    this.CategoryId= this.activatedRoute.snapshot.params["id"];
    this.router.navigate([`/SearchByCategory/${this.CategoryId}`]);
    window.location.reload();

  }
}
