import { ProductsDefaultComponent } from './products-default/products-default.component';
import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductsDefaultComponent },
      { path: 'product', component: ProductsDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
