import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { BigCityComponent } from './big-city/big-city.component';
import { SmallCityComponent } from './small-city/small-city.component';
import { TruckComponent } from './truck/truck.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PandoraBoxComponent } from './pandora-box/pandora-box.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';



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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
