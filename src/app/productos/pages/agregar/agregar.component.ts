import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto: string = 'Luis Morales';
  color: string = 'red';

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required ]
  })

  constructor(private formBuilder: FormBuilder) { }

  campoNoValido( nombreCampo: string ): boolean {
    return this.miFormulario.get(nombreCampo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto = 'Luis Jimnénez';
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
