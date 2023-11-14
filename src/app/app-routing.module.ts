import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PandoraBoxComponent} from './pandora-box/pandora-box.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'everything', component: PandoraBoxComponent},
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
