import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm = {
    producto:'RTX 4080ti',
    precio:0,
    existencias:10
  };

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido():boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido():boolean {
    
    return this.miFormulario?.form.controls['precio']?.touched
            && this.miFormulario?.form.controls['precio']?.value<0;
  }

  guardar(){

    console.log('Posteo correcto');
    this.miFormulario.resetForm(
      {     
        producto:'algo',
        precio: 0,
        existencias: 0
      }

    );
  }
}
