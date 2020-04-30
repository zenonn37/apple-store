import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

const routes: Routes = [{ path: 'cart', component: CartComponent }];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartModule {}
