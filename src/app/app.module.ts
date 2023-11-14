import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { BigCityComponent } from './big-city/big-city.component';
import { SmallCityComponent } from './small-city/small-city.component';
import { TruckComponent } from './truck/truck.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PandoraBoxComponent } from './pandora-box/pandora-box.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import { RandomComponent } from './random/random.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyRowComponent } from './my-row/my-row.component';
import { HighlightDirective } from './highlight.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';


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
    HighlightDirective,
    ProductListComponent,
    ProductComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
