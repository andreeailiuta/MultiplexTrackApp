import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input.component/text-input.component';
import { LoginContainerComponent} from './login-container.component/login-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CreateAccountContainerComponent } from './create-account-container/create-account-container.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';

// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    LoginContainerComponent,
    CreateAccountContainerComponent,
    PresentationPageComponent
    
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
