import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    WrapperComponent,
    MainContainerComponent,
  ],
  declarations: [
    HeaderComponent,
    WrapperComponent,
    MainContainerComponent,
  ]
})
export class LayoutModule {
}
