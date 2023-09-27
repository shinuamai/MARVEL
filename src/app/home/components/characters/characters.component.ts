import { Component } from '@angular/core';
import { MarvelCharacter } from 'src/app/models/marvel-character.model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters: MarvelCharacter[] = [];
  currentPage = 1; // Página actual
  pageSize = 20; // Cantidad de elementos por página
  tooltipVisible = false;
  tooltipText = 'Este es mi tooltip personalizado';

  constructor(
    private dataService: GetDataService
  ) {}

  ngOnInit(): void {
    this.loadMarvelCharacters();
  }

  loadMarvelCharacters() {
    this.dataService.getMarvelCharacters(this.currentPage, this.pageSize)
      .subscribe(
        (characters: MarvelCharacter[]) => {
          this.characters = characters;
        });
  }
  
  mostrarTooltip() {
    this.tooltipVisible = true;
  }

  ocultarTooltip() {
    this.tooltipVisible = false;
  }

  nextPage() {
    this.currentPage++;
    this.loadMarvelCharacters();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMarvelCharacters();
    }
  }
}
