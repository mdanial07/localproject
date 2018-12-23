import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module'
import { AppComponent } from './app.component';
import {
  TemplateLayout,
  HomePage,
  Tweets,
  Profile,
  NewPost,
  EditProfile,
  Filter,
  ManiFest,
  RedSpeckledKidneyBeans,
  GrainBazar,
  Blogs,
} from './Component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateLayout,
    HomePage,
    Tweets,
    Profile,
    NewPost,
    EditProfile,
    Filter,
    ManiFest,
    RedSpeckledKidneyBeans,
    GrainBazar,
    Blogs,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
