import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountPresentationPageComponent } from './create-account-presentation-page/create-account-presentation-page.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';

const routes: Routes = [
{
  path: 'login',
  component: PresentationPageComponent
},
{
  path: 'signup',
  component: CreateAccountPresentationPageComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
