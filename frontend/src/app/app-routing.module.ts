import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './User/edit/edit.component';
import { ViewComponent } from './User/view/view.component';
import { NewComponent } from './User/new/new.component';

const routes: Routes = [
  {path: "new" , component:NewComponent},
  {path: "edit" , component:EditComponent},
  {path: "view" , component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
