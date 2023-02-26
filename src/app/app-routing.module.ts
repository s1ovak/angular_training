import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsPageComponent} from "./components/pages/product-details-page/product-details-page.component";
import {ProductListPageComponent} from "./components/pages/product-list-page/product-list-page.component";

const routes: Routes = [
  {path: 'products', component: ProductListPageComponent},
  {path: 'product/:id', component: ProductDetailsPageComponent},
  {path: '', component: ProductListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
