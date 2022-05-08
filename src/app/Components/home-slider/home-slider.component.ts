import { Component } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent {

  //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // images = [1, 2, 3].map((n) => `assets/Images/slider${n}.png`);

  images = [
    'https://assets.vogue.in/photos/5ce41d389cc0c04346f9c1a5/master/pass/Skincare-and-haircare-products-with-natural-ingredients.jpg',
    'https://s.abcnews.com/images/GMA/KYLIEBABY2_1633020913276_hpMain_16x9_992.jpg',
    'https://cdn.shopify.com/s/files/1/0462/7424/8856/products/Screenshot2021-03-11at11.14.03AM_1024x1024@2x.png?v=1615455484'
  ];
}
