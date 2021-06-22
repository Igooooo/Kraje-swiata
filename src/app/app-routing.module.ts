import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { CountryComponent } from './main/country/country.component';
import { MenuComponent } from './main/menu/menu.component';
import { RegionComponent } from './main/region/region.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MenuComponent},
  {path: 'about', component: AboutComponent}, 
  {path: 'region/:region', component: RegionComponent},
  {path: 'country/:region/:country', component: CountryComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
