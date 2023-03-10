import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { GdsComponent } from './components/gds/gds.component';
import { ProductEditingComponent } from './components/product-editing/product-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    DetailsComponent,
    CatalogComponent,
    AuthorizationComponent,
    PersonalAccountComponent,
    AdministrationComponent,
    GdsComponent,
    ProductEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
