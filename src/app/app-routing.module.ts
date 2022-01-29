import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaiementComponent } from './paiement/paiement.component';
import { RetraitComponent } from './retrait/retrait.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: 'paiement',
    component: PaiementComponent,
  },
  {
    path: 'cash-in',
    component: RetraitComponent,
  },
  {
    path: '',
    redirectTo: "/dashboard",
    pathMatch: 'full'
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
