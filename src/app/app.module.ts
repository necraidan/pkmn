import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { WeaknessComponent } from './weakness/weakness.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeballComponent,
    WeaknessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
