import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
// import { JumboComponent } from './components/jumbo/jumbo.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  // {
  //   path: 'landing/home',
  //   component: JumboComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }