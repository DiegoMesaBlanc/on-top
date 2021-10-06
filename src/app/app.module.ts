import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';

// Modules
import { ContractModule } from './modules/contracts/contract.module';
import { DocumentModule } from './modules/documents/document.module';
import { GlobalsModule } from './modules/globals/globals.module';
import { ProdModule } from './modules/payouts/payout.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContractModule,
    DocumentModule,
    GlobalsModule,
    ProdModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
