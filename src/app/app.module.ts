import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { HttpModule } from '@angular/http';


import { XlsxtojsonService } from './providers/xlsxtojson.service';
import { AppService } from "./providers/app.service";
import {AuthGuard  } from "./providers/auth.guard";
import { HeaderComponent } from './components/header/header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarComponent } from "./components/sidebar/sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule
  ],
 
  providers: [XlsxtojsonService,AppService,AuthGuard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
