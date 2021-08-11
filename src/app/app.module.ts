import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadormModule } from './contador/contadorm.module';

import { HeroesModule } from './Heroes/heroes.module';
// import { ContadorComponent } from './contador/contador/contador.component'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
