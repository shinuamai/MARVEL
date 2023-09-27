import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersComponent } from '../../../../app/home/components/characters/characters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientModuleTestingModule
import { GetDataService } from 'src/app/services/get-data.service';


describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async() => {
  await TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      providers: [GetDataService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
