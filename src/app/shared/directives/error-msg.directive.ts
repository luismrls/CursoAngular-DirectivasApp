import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es requerido';

  constructor(private element: ElementRef<HTMLElement> ) {
    this.htmlElement = element
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes)

    if (changes['mensaje']) {
      this.htmlElement.nativeElement.innerHTML = changes['mensaje'].currentValue;
    }

    if (changes['color']) {
      this.htmlElement.nativeElement.style.color = changes['color'].currentValue;
    }
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this.mensaje;
  }
  
  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


}
