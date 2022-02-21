import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(public elementRef:ElementRef) { } 

  ngOnInit(): void {
 } 

  @Input('appHoverAffect') apphoverAffect:any;  

  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.classList.add(this.apphoverAffect);
     
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.apphoverAffect);
}
} 

