import { Component } from '@angular/core';
import {TextService} from '../../text.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent {

  constructor(private ts: TextService) {
  }

  changeText() {
    this.ts.emitValue('I changed you!');
  }

}


