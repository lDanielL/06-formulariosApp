import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos:Favorito[]
}

interface Favorito {
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  @ViewChild('miFormulario') miFormulario!:NgForm;
  nuevoJuego:string = '';

  persona: Persona ={
    nombre:'Yo',
    favoritos:[
      {
        id:1,
        nombre:'The last of us'
      },
      {
        id:2,
        nombre:'Death Stranging'
      },
    ]
  }


  agregarJuego(){
    const nuevoFavorito: Favorito={
      id:this.persona.favoritos.length+1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''
  }
  eliminar(i: number){
    this.persona.favoritos.splice(i,1);
  }  


  guardar(){
    console.log('submit')
  }


  nombreValido():boolean{
    return this.miFormulario?.form.controls['nombre']?.invalid && this.miFormulario?.form.controls['nombre']?.touched;

  }
}
