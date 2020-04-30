import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    AuthModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
