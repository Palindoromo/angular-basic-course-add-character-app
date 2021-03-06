import { Component, Input } from '@angular/core';
// import { Personaje } from '../interfaces/dbz.interface';
import { PjService } from '../services/pj.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input('data')  personajes: Personaje[] = [];
  get personajes() {
    return this.pjService.personajes;
  }

  constructor (private pjService: PjService) {  }
}
