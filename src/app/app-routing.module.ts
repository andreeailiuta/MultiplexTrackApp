import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountPresentationPageComponent } from './create-account-presentation-page/create-account-presentation-page.component';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';

const routes: Routes = [
{
  path: '',
  component: PresentationPageComponent
},

{
  path: 'login',
  component: PresentationPageComponent
}, 
{
  path: 'signup',
  component: CreateAccountPresentationPageComponent 
},
{
  path: 'home',
  component: HomePageContainerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
