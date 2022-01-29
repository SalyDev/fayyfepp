import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaiementComponent } from './paiement/paiement.component';
import { RetraitComponent } from './retrait/retrait.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidebarComponent, DashboardComponent, PaiementComponent, RetraitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
