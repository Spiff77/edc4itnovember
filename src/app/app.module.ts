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
import {NameService} from './name.service';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { DComponent } from './components/d/d.component';
import {HttpClientModule} from '@angular/common/http';
import { PrimaryComponent } from './components/primary/primary.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PlayDialogComponent } from './play-dialog/play-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import { HowAreYouDialogComponent } from './how-are-you-dialog/how-are-you-dialog.component';


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
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    PrimaryComponent,
    SecondaryComponent,
    PlayDialogComponent,
    HowAreYouDialogComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*MATERIAL BELOW*/
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    A11yModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
