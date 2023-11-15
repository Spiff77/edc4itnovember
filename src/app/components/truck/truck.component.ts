import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: '[app-truck], app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent {
  model = 'Peugeot'
  private el: HTMLElement

  constructor(el: ElementRef) {
    this.el = el.nativeElement
  }

  @HostListener('click')
  sayHonkHonk(){
    console.log("Honk Honk!!")
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.style.backgroundColor = "yellow";
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.style.removeProperty("background-color");
  }
}
