import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialComponentsModule
  ],
  declarations: [
    AppComponent,
    Parallax
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
