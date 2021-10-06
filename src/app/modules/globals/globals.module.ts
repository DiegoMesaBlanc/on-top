import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { GlobalsRoutingModule } from './globals-routing.module';

// Components
import { ExampGlobalComponent } from './components/examp-global/examp-global.component';



@NgModule({
  declarations: [
    ExampGlobalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GlobalsRoutingModule,
  ],
})


export class GlobalsModule { }
