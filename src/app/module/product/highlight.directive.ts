import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight')
  price=0

  el!:HTMLElement

  constructor(el: ElementRef) {
    this.el = el.nativeElement
  }

  ngOnInit(): void {
    console.log('Hello', this.price)
    this.el.style.backgroundColor = this.price >= 15 ? 'red': 'green'
  }
}
