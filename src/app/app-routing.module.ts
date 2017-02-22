import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { WishesComponent } from 'app/wishes/wishes.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wishes' },
  { path: 'wishes', component: WishesComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
