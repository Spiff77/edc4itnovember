import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = [
    {id: 1, label: 'The beatles', price: 10},
    {id: 2, label: 'Motorhead', price: 15},
    {id: 3, label: 'Chantal Goya', price: 25}
  ]

}
