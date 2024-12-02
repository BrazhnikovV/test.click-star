import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, isDevMode} from '@angular/core';
import {AppComponent} from "./app.component";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
    ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
