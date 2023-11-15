import { Component } from '@angular/core';
import {CountService} from '../../count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public cs: CountService) {
  }

}
