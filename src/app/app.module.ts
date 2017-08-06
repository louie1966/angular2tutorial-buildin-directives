import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgForGroupedExampleComponent } from './ngfor-grouped-example/ngfor-grouped-example.component';
import { NgIfExampleComponent } from './ngif-example/ngif-example.component';
import { NgSwitchExampleComponent } from './ngswitch-example/ngswitch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    NgForGroupedExampleComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
