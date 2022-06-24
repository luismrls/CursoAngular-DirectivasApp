import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = 'Red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  @Input() set mensaje (valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  };
  
  // @Input() mensaje: string = 'Este campo es requerido';
  @Input() set color (valor: string ) {
    this._color = valor;
    this.setColor();
  };
  
  @Input() set valido (valor: boolean ) {
    if ( valor ){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
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
    this.setClass();
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }
  
  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


}
