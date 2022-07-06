import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit {
  
  validaciones: Validators[]=[Validators.required,Validators.min(0)];

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required,Validators.minLength(3)]],
    precio: [,this.validaciones],
    existencias: [,this.validaciones],
  })
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX',
        precio:1600,
        existencias: 10
      })
  }


  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched
  }


  guardar(){

    this.miFormulario.markAllAsTouched();

    if (this.miFormulario.invalid) return;

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }


}
