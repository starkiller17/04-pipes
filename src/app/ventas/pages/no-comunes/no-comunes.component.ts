import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = "Lalo";
  genero: string = "masculino";

  invitacionMapa = { 
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = [ 'Diana', 'Kaled', 'Said', 'Sandy', 'Gaby'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  };

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
    if (this.nombre == "Lalo") {
      this.nombre = 'Hannah';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Lalo';
      this.genero = 'masculino';
    }
    
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'lalosaid',
    edad: 27,
    direccion: 'SLP, MX'
  };

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval( 2000 ).pipe( tap( () => console.log('Intervalo') ) ); // Emite valores durante un segundo: 0,1,2,3,4,5

  valorPromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500)
  });

}
