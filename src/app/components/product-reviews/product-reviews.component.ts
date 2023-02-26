import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Review} from "../../model/review";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  private _productId: string;

  private _reviews: Review[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadReviews()
      .subscribe(response => {
        this._reviews = response;
      })
  }

  private loadReviews(): Observable<Review[]> {
    const url = "http://localhost:3000/reviews";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("productId", this._productId);

    return this.http.get<Review[]>(url, {params: queryParams});
  }

  @Input()
  set productId(value: string) {
    this._productId = value;
  }

  get productId(): string {
    return this._productId;
  }

  get reviews(): Review[] {
    return this._reviews;
  }
}
