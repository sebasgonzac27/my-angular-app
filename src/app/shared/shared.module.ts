import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductCardComponent],
})
export class SharedModule {}
