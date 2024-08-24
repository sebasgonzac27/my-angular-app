import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PageComponent],
  imports: [CommonModule, RouterOutlet],
})
export class CoreModule {}
