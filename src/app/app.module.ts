import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './core/layout/layout.module';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';

import 'reflect-metadata';
import { CachedHttpClient } from './shared/cache/cached-http-client';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    WeatherModule,

  ],
  providers: [CachedHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
