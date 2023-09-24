import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MenuComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule
  ]
})
export class HomeModule { }
