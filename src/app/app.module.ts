import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input.component/text-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoginContainerComponent} from './login-container.component/login-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAccountContainerComponent } from './create-account-container/create-account-container.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { CreateAccountPresentationPageComponent } from './create-account-presentation-page/create-account-presentation-page.component';
import { Routes } from '@angular/router';
 
const routes :Routes  = [];

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    LoginContainerComponent,
    CreateAccountContainerComponent,
    PresentationPageComponent,
    CreateAccountPresentationPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
