import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckResolveComponent } from './check-resolve/check-resolve.component';
import { QueryResultResolver } from './_resolve/query-result.resolver';

const routes: Routes = [
  {
    path: 'checkresolve',
    component: CheckResolveComponent,
    resolve: { query: QueryResultResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
