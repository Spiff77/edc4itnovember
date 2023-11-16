import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from '../../components/user-list/user-list.component';
import {PandoraBoxComponent} from '../../components/pandora-box/pandora-box.component';
import {MyTableComponent} from '../../components/my-table/my-table.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'everything', component: PandoraBoxComponent},
  {path: 'table', component: MyTableComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SandoxModule { }
