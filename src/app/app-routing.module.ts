import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';
import { GdsComponent } from './components/gds/gds.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { ProductEditingComponent } from './components/product-editing/product-editing.component';
import { AccessRoleAdminGuard } from './guards/access-role-admin.guard';
import { AccessRoleUserGuard } from './guards/access-role-user.guard';
import { AdditionalLoadingResolver } from './resolve/additional-loading.resolver';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'catalog', component: CatalogComponent,
  },
  {
    path: 'catalog/:id/details', component: DetailsComponent
  },
  {
    path: 'auth', component: AuthorizationComponent
  },
  {
    path: 'profile', component: PersonalAccountComponent, canActivate: [AccessRoleUserGuard]
  },
  {
    path: 'admin', component: AdministrationComponent, canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'admin/items', component: GdsComponent, canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'admin/items/:id', component: ProductEditingComponent, canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
