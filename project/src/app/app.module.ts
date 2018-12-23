import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module'
import { AppComponent } from './app.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommentsDialog } from './Component/HomePage/HomePage';

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
import { CommentDetailsDialog } from './Component/Blogs/Blogs';

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
    CommentsDialog,
    CommentDetailsDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [
    CommentsDialog,
    CommentDetailsDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
