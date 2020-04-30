import { ProfileComponent } from './profile.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDefaultComponent } from './profile-default/profile-default.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileDefaultComponent },
      { path: 'user', component: ProfileUserComponent },
      { path: 'orders', component: OrderHistoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
