import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {HighlightDirective} from './highlight.directive';

@NgModule({
  declarations:
    [ProductComponent,
    ProductListComponent,
    HighlightDirective
    ],
  imports: [
    CommonModule
  ],
  exports:[ProductListComponent]
})
export class ProductModule { }
