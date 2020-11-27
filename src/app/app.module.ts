import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input.component/text-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoginContainerComponent} from './login-container.component/login-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAccountContainerComponent } from './create-account-container/create-account-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    LoginContainerComponent,
    CreateAccountContainerComponent
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
