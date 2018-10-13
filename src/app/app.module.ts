import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { XlsxtojsonService } from './providers/xlsxtojson.service';
import { AppService } from "./providers/app.service";
import {AuthGuard  } from "./providers/auth.guard";
import { HeaderComponent } from './components/header/header.component';
import {SidebarModule  } from "./sidebar/sidebar.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ng6-toastr-notifications';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,SidebarModule,BrowserAnimationsModule,HttpClientModule, ToastrModule.forRoot()
  ],
 
  providers: [XlsxtojsonService,AppService,AuthGuard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
