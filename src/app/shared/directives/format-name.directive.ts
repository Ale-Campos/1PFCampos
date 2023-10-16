import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatName]'
})
export class FormatNameDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.textTransform = "uppercase";
    this.elementRef.nativeElement.style.fontWeight = "bold";
  }
}
