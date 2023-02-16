import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './_components/error/error.component';
import { PostsComponent } from './_components/posts/posts.component';
import { ShowPostComponent } from './_components/show-post/show-post.component';
import { DataService } from './_servisecs/data.service';
import { FormsModule } from '@angular/forms';
import { AccessGuard } from './_guards/access.guard';
import { EditComponent } from './_components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostsComponent,
    ShowPostComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [DataService, AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
