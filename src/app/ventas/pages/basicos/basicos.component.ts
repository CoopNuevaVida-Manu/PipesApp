import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'manuel';
  nombreUpper: string = 'MANUEL';
  nombreCompleto: string = 'mANUel vIlLedA';

  fecha: Date = new Date();

}
