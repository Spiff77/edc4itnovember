import { Component } from '@angular/core';
import {TextService} from '../../text.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent {

  constructor(private ts: TextService, private router: Router) {
  }

  changeText() {
    this.router.navigate(['/users'])
  }

}


