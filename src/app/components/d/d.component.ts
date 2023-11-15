import {Component, OnInit} from '@angular/core';
import {TextService} from '../../text.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements  OnInit{

  text= 'Hello'

  constructor(private ts: TextService) {
  }

  ngOnInit(): void {
    this.ts.evt.subscribe(v => {
     if(v == 'EMPTY'){
      // empty the array
     } else{

     }
     this.text = v
    });
  }


}
