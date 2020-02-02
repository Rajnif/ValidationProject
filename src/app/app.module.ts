import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    TdfComponent,
    RfComponent,
    LeftnavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
