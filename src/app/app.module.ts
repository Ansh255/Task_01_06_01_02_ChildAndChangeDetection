import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DefaultComponent } from './default/default.component';
import { OnpushComponent } from './onpush/onpush.component';



@NgModule({
  declarations: [
    AppComponent,  
    ChildComponent,
    ParentComponent,
    DefaultComponent,
    OnpushComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
