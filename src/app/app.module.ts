import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [AppComponent, PokeballComponent, WeaknessesComponent, TypesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
