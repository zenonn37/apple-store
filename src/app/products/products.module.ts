import { ProductsDetailComponent } from './../products-detail/products-detail.component';
import { ProductsRoutingModule } from './products-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsDefaultComponent } from './products-default/products-default.component';

@NgModule({
  declarations: [ProductsComponent, ProductsDefaultComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
