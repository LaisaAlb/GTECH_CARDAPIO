import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardListPromotionComponent } from './components/cards/card-list-promotion/card-list-promotion.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'list', component: CardListComponent }, 
  { path: 'listPromotion', component: CardListPromotionComponent},
  { path: 'listProductSelected', component: ProductCartComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
