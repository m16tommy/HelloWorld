import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StationComponent } from './station/station.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'station',
    component: StationComponent
  },
  {
    path: 'test',
    component: TestPageComponent
  },
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
