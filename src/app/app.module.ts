import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input.component/text-input.component';
import { LoginComponent} from './login.component/login.component';
import { LoginContainerComponent} from './login-container.component/login-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    LoginComponent,
    LoginContainerComponent
    
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
