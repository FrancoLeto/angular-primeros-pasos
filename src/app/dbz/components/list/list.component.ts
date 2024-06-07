import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.inerface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();
  deleteCharacter(id: string):void{
    this.onDeleteCharacter.emit(id);
  }

}
