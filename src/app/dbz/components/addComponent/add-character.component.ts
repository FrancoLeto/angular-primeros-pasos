import {  Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inerface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dbz-add-character',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    id: "",
    name: "",
    power: 0
  }

  emitCharacter(): void {
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character});
    this.cleanCharacter();
  }

  private cleanCharacter(){
    this.character = { id:'', name: '', power: 0 };
  }
}
