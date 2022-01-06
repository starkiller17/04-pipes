import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'said';
  nombreUpper: string = 'SAID';
  nombreCompleto: string = 'saId MeNdeZ'

  fecha: Date = new Date(); // Fecha del dia de hoy

}
