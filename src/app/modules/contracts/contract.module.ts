import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { ContractRoutingModule } from './contract-routing.module';

// Components
import { ContractComponent } from './components/contract/contract.component';



@NgModule({
  declarations: [
    ContractComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContractRoutingModule,
  ],
})


export class ContractModule { }
