import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';
import { of } from 'rxjs';
import { environment } from '@environments/environment';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load products', (done: DoneFn) => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Test',
        price: 100,
        description: 'Test',
        image: 'test.jpg',
        category: Category.Electronics,
        rating: { rate: 4, count: 10 },
      },
    ];
    service.getProducts().subscribe(result => {
      expect(result).toEqual(mockProducts);
      done();
    });

    const url = environment.api.url + '/products';
    const req = httpController.expectOne(url);
    req.flush(mockProducts);
  });
});
