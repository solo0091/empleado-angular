import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appSergioDirective]'
})
export class SergioDirectiveDirective {

  constructor(private elementodominio: ElementRef) {
    this.elementodominio.nativeElement.style.backgroundColor='red';

   }
  @HostListener('mouseenter') onMouseEnter(){
     this.cambiarcolor('blue');
     console.log('mouse adentro del area');
  }

  cambiarcolor(color:string){
    this.elementodominio.nativeElement.style.backgroundColor=color;

  }
  
}
