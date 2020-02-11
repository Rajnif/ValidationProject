import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';
import { DynamicAddRemoveComponent } from './dynamic-add-remove/dynamic-add-remove.component'

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
  },
  {
  path: 'dynamicform',
  component :DynamicAddRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
