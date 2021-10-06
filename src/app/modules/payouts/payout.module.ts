import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { PayoutRoutingModule } from './payout-routing.module';

// Components
import { PayoutComponent } from './components/payout/payout.component';



@NgModule({
  declarations: [
    PayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PayoutRoutingModule,
  ],
})


export class ProdModule { }
