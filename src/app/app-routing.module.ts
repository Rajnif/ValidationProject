import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';

const routes: Routes = [
  {path: '', redirectTo: 'forms', pathMatch: 'full'},
  {
    path: 'forms',
    component: FormcomponentComponent,
  },
  {
    path: 'reactiveform',
    component: RfComponent
  },
  {
    path: 'templatedrivvenform',
    component: TdfComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
