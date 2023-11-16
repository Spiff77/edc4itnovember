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
import {PrimaryComponent} from './components/primary/primary.component';
import {AComponent} from './components/a/a.component';
import {CComponent} from './components/c/c.component';
import {SecondaryComponent} from './components/secondary/secondary.component';
import {SandoxModule} from './module/sandox/sandox.module';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'form/template', component: TemplateFormComponent},
  {path: 'form/reactive', component: ReactiveFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sandbox', loadChildren: () => SandoxModule},
  {path: 'primary', component: PrimaryComponent, children: [
      {path: 'a', component: AComponent}
  ]},
  {path: 'secondary', component: SecondaryComponent, children: [
      {path: 'c', component: CComponent},
      {path: 'c/:name', component: CComponent}
  ]},
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
