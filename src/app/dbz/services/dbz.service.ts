import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inerface';
import { v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }];

  onNewCharacter(character: Character): void{
    character.id = uuid();
    this.characters.push(character);
    console.log(this.characters);
  }

  onDeleteCharacter(id: string): void{
    this.characters = this.characters.filter(c => c.id !== id);
  }
}
