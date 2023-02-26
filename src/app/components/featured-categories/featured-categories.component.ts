import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.css']
})
export class FeaturedCategoriesComponent implements OnInit {

  public featuredCategories = [
    {name: "Men's clothing"},
    {name: "Women's clothing"},
    {name: "Jewelery"},
    {name: "Electronics"}
  ]

  constructor() { }

  ngOnInit(): void {}
}
