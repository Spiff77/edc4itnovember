import {Component, OnInit} from '@angular/core';
import {TextService} from '../../text.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements  OnInit{

  text= 'Hello'

  constructor(private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( v => {
      if(v.get('name')) {
        this.text =  v.get('name') ?? ""
      }
    })
  }


}
