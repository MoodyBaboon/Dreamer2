import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { WishesComponent } from './wishes/wishes.component';
import { WishComponent } from './wishes/wish/wish.component';
import { WishListComponent } from './wishes/wish-list/wish-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WishesComponent,
    WishComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
