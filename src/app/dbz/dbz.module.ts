import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from "./components/list/list.component";
import { AddCharacterComponent } from "./components/addComponent/add-character.component";



@NgModule({
    exports: [
        MainPageComponent,
        ListComponent,
        AddCharacterComponent
    ],
    declarations: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ListComponent,
        AddCharacterComponent
    ]
})
export class DbzModule { }
