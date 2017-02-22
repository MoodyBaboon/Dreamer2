import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishesRoutingModule, routedComponents } from './wishes-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishComponent } from './wish/wish.component';

@NgModule({
  imports: [
    CommonModule,
    WishesRoutingModule
  ],
  declarations: [WishListComponent, WishComponent, routedComponents]
})
export class WishesModule { }
