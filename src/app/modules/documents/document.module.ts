import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { DocumentRoutingModule } from './document-routing.module';

// Components
import { DocumentComponent } from './components/document/document.component';



@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocumentRoutingModule,
  ],
  providers: [
    
  ]
})


export class DocumentModule { }
