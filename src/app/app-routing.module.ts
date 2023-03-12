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
  { path: '', component: MainPageComponent, title: 'Главная страница' },
  {
    path: 'catalog', component: CatalogComponent, title: 'Каталог товаров'
  },
  {
    path: 'catalog/:id', component: DetailsComponent, title: 'Детальная информация о товаре'
  },
  {
    path: 'auth', component: AuthorizationComponent, title: 'Вход'
  },
  {
    path: 'profile', component: PersonalAccountComponent, title: 'Личный кабинет', canActivate: [AccessRoleUserGuard], resolve: { usr: AdditionalLoadingResolver }
  },
  {
    path: 'admin', component: AdministrationComponent, title: 'Администрирование', canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'admin/items', component: GdsComponent, title: 'Товары', canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'admin/items/:id', component: ProductEditingComponent, title: 'Редактирование товара', canActivate: [AccessRoleAdminGuard]
  },
  {
    path: 'error', component: ErrorComponent, title: 'Ошибка'
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
