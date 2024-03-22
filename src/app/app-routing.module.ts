import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraIndustriaComponent } from './pages/compra-industria/compra-industria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
