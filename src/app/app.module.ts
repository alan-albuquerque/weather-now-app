import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './core/layout/layout.module';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { CacheModule } from 'ionic-cache';

import 'reflect-metadata';

export const MODULE_CONFIG = {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    WeatherModule,
    CacheModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
};

@NgModule(MODULE_CONFIG)
export class AppModule {
}
