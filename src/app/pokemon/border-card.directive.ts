import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  initialColor:string = '#f5f5f5';
  defaultColor:string = '#009688'
  initialHeight :number = 170

  constructor(private element : ElementRef ) {
    // this.setHeight( this.initialHeight )
    this.setBorderColor( this.initialColor )
  }

  @Input("appBorderCard") borderColor:string ; //avec alias

  @HostListener('mouseenter')
  mouseEnter() {
    this.setBorderColor( this.borderColor ||  this.defaultColor )
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.setBorderColor( '#f5f5f5')
  }

  setHeight(height:number) {
    this.element.nativeElement.style.height = `${height}px`
  }

  setBorderColor(color:string) {
    this.element.nativeElement.style.border = `solid 3px ${color}`
  }

}
