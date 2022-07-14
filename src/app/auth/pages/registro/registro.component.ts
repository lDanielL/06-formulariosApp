import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  



  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator]],
    username:['', [Validators.required, this.vs.noPuedeSer]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]],
  },{
    validators:[this.vs.camposIguales('password','password2')]
  }

  
  
  );

  get emailErrorMsg():string{
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']) return 'Email es obligatorio';

    if(errors?.['pattern']) return 'Formato no válido';

    if(errors?.['emailTomado']) return 'Ya esta en uso';
    
    return '';
  
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService ,
              private emailValidator: EmailValidatorService
              )
              { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Mon Dongo',
      email:'mon@dongo.cl',
      username:'el_loco_Terry',
      password: '123456',
      password2: '123456',
    })
  }


  campoNoValido(campo:string){

    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;

  }
  

  submitFormulario(){

    // console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
