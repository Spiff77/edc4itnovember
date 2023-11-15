import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './components/post-list/post-list.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PandoraBoxComponent} from './components/pandora-box/pandora-box.component';
import {TemplateFormComponent} from './components/template-form/template-form.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {MyTableComponent} from './components/my-table/my-table.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'everything', component: PandoraBoxComponent},
  {path: 'table', component: MyTableComponent},
  {path: 'form/template', component: TemplateFormComponent},
  {path: 'form/reactive', component: ReactiveFormComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
