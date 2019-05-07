import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './User/view/view.component';
import { EditComponent } from './User/edit/edit.component';
import { NewComponent } from './User/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
