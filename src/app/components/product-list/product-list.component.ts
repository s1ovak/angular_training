import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _limit: number;
  private _category: string;
  private _featured: boolean;

  private _products: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProducts()
      .subscribe(response => {
      this._products = response;
    })
  }

  private loadProducts(): Observable<Product[]> {
    const url = 'http://localhost:3000/products';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("featured",this.featured);
    queryParams = queryParams.append("category",this.category);

    return this.http.get<Product[]>(url, {params: queryParams});
  }

  @Input()
  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  @Input()
  set limit(value: number) {
    this._limit = value;
  }
  get limit(): number {
    return this._limit;
  }

  @Input()
  get featured(): boolean {
    return this._featured;
  }

  set featured(value: boolean) {
    this._featured = value;
  }

  get products(): Product[] {
    return this._products;
  }
}
