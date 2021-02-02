import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesAmericaComponent} from './components/countries-america/countries-america.component'
import {AmericaDetailComponent} from './components/america-detail/america-detail.component'
const routes: Routes = [
  {
    path:'',
    component:CountriesAmericaComponent
  },
  {
    path:':id',
    component:AmericaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericaRoutingModule { }
