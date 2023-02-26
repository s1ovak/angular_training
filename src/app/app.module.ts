import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './components/pages/product-list-page/product-list-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    NavigationBarComponent,
    ProductListComponent,
    ProductGridItemComponent,
    FeaturedCategoriesComponent,
    ProductDetailsPageComponent,
    ProductDetailsComponent,
    ProductReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
