import { TestBed } from '@angular/core/testing';
import { GetDataService } from '../../app/services/get-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('GetDataService', () => {
  let service: GetDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetDataService]
    });
    service = TestBed.inject(GetDataService);
    httpMock = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch Marvel characters', () => {
    const page = 1;
    const pageSize = 20;

    service.getMarvelCharacters(page, pageSize).subscribe((characters) => {
      expect(characters).toBeTruthy(); // Verifica que se haya recibido algún dato.
    });
    const req = httpMock.expectOne((request) => {
      return true;
    });
    expect(req.request.method).toBe('GET');

  });
});
