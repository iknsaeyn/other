import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_components/error/error.component';
import { PostsComponent } from './_components/posts/posts.component';
import { ShowPostComponent } from './_components/show-post/show-post.component';
import { AccessGuard } from './_guards/access.guard';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivateChild: [AccessGuard],
    children: [
      {
        path: ':id',
        component: ShowPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
