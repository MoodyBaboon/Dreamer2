import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishesComponent } from './wishes.component';
import { WishComponent } from './wish/wish.component';
import { WishListComponent } from './wish/wish-list.component';


const routes: Routes = [
  {
    path: '',
    component: WishesComponent,
    children: [
      {
        path: '',
        component: WishListComponent
      },
      {
        path: ':id',
        component: WishComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WishesRoutingModule { }

export const routedComponents = [WishesComponent, WishComponent, WishListComponent];
