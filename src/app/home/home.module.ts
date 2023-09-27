import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
