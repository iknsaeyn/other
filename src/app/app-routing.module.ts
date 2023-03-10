import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailsComponent } from './components/details/details.component';
import { GdsComponent } from './components/gds/gds.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { ProductEditingComponent } from './components/product-editing/product-editing.component';

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
    path: 'profile', component: PersonalAccountComponent
  },
  {
    path: 'admin', component: AdministrationComponent
  },
  {
    path: 'admin/items', component: GdsComponent
  },
  {
    path: 'admin/items/:id', component: ProductEditingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
