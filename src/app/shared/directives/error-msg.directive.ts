import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = '';
  private _mensaje: string = '';

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  @Input() set mensaje (valor: string ) {
    this.htmlElement.nativeElement.innerHTML = valor;
    this._mensaje = valor;
  };
  
  // @Input() mensaje: string = 'Este campo es requerido';
  @Input() set color (valor: string ) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor
  };
  

  constructor(private element: ElementRef<HTMLElement> ) {
    this.htmlElement = element
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['mensaje']) {
  //     this.htmlElement.nativeElement.innerHTML = changes['mensaje'].currentValue;
  //   }

  //   if (changes['color']) {
  //     this.htmlElement.nativeElement.style.color = changes['color'].currentValue;
  //   }
  // }

  ngOnInit(): void {
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
