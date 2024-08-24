import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '@shared/shared.module';
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';
import { of } from 'rxjs';
import { ProductsService } from '@shared/services/products.service';
import { By } from '@angular/platform-browser';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Test',
    price: 10,
    description: 'Description test',
    image: 'test.jpg',
    category: Category.Electronics,
    rating: { rate: 4, count: 10 },
  },
];

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [SharedModule],
      providers: [ProductsService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    spyOn(productsService, 'getProducts').and.returnValue(of(mockProducts));
    component.loadProducts();

    expect(component.products).toEqual(mockProducts);
    expect(productsService.getProducts).toHaveBeenCalled();
  });

  it('should render product list when products are defined', () => {
    component.products = mockProducts;
    fixture.detectChanges();

    const productList = fixture.debugElement.query(By.css('.product-list'));
    expect(productList.nativeNode).toBeDefined();
  });
});
