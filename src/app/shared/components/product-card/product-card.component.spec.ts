import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { Category } from '@shared/models/category.model';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the article when product is defined', () => {
    component.product = {
      id: 1,
      title: 'Test',
      description: 'Test',
      price: 100,
      image: 'test.jpg',
      category: Category.Electronics,
      rating: { rate: 4, count: 10 },
    };

    fixture.detectChanges();
    const productCardElement = fixture.debugElement.query(
      By.css('.product-card')
    );
    expect(productCardElement.nativeNode).toBeDefined();
  });

  it('should not render the article when product is undefined', () => {
    component.product = undefined;
    fixture.detectChanges();

    const productCardElement = fixture.debugElement.query(
      By.css('.product-card')
    );

    expect(productCardElement).toBeNull();
  });
});
