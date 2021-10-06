import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'contracts',
    loadChildren: './modules/contracts/contract.module#ContractModule'
  },


  { path: '', redirectTo: 'contracts', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
