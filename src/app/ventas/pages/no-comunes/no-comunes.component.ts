import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Sara';
  genero: string = 'femenino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedros', 'Juan']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando`
  }


  cambiarCliente(){
    if(this.nombre=== 'Sara'){
      this.nombre = 'Manuel'
      this.genero = 'masculino'
    }else{
      this.nombre = 'Sara'
      this.genero = 'femenino'
    }
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //key value
  persona = {
    nombre: 'Manuel',
    edad: 23,
    direccion: 'Tegucigalpa'
  }

  //JsonPipe
  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);
  
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Fin de la promesa')
    }, 3500);
  });

}
