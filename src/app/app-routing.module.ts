import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {

    path:'',
    loadChildren:()=>import('./home/home.module').then(m=>HomeModule)
  },

  {
    path:'africa',
    loadChildren:()=>import('./africa/africa.module').then(a=>a.AfricaModule)
  },
  {
    path:'america',
    loadChildren:()=>import('./america/america.module').then(a=>a.AmericaModule)
  },
  {
    path:'asia',
  loadChildren:()=>import('./asia/asia.module').then(a=>a.AsiaModule)
  },
  {
  path:'europa',
  loadChildren:()=>import('./europa/europa.module').then(a=>a.EuropaModule)
  },
  {
    path:'oceania',
    loadChildren:()=>import('./oceania/oceania.module').then(o=>o.OceaniaModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
