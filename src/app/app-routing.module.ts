import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyforgeDeckComponent } from './keyforge-deck/keyforge-deck.component';

const routes: Routes = [{ path: 'deck', component: KeyforgeDeckComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
