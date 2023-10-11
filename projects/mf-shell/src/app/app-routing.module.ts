import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    //Cargar el siguiente componente, como estamos utilizando modules vamos a usar la opcion loadChildren
    loadChildren: () => 
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule',
      }).then((m) => m.ProductsModule),
  },
  
  // {
  //   path: 'payment',
  //   loadChildren: () => import('mfPayment/PaymentComponent')
  //   .then((c) => c.PaymentComponent),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
