import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private _productId: string;

  private _product: Product;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProduct()
      .subscribe(response => {
        this._product = response;
      })
  }

  private loadProduct(): Observable<Product> {
    const url = `http://localhost:3000/products/${this._productId}`;

    return this.http.get<Product>(url);
  }

  @Input()
  set productId(value: string) {
    this._productId = value;
  }

  get productId(): string {
    return this._productId;
  }

  get product(): Product {
    return this._product;
  }
}
