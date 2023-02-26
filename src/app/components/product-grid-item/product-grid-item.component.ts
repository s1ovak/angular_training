import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {

  private _product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }
}
