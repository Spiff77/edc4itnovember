import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { BigCityComponent } from './components/big-city/big-city.component';
import { SmallCityComponent } from './components/small-city/small-city.component';
import { TruckComponent } from './components/truck/truck.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PandoraBoxComponent } from './components/pandora-box/pandora-box.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import { RandomComponent } from './components/random/random.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyRowComponent } from './components/my-row/my-row.component';
import {ProductModule} from './module/product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    BigCityComponent,
    SmallCityComponent,
    TruckComponent,
    UserListComponent,
    PostListComponent,
    PandoraBoxComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    RandomComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    MyTableComponent,
    MyRowComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
