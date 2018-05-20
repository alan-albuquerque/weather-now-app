import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardContentComponent } from './card/card-content/card-content.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardComponent } from './card/card/card.component';
import { LoadingComponent } from './loading/loading.component';

const COMPONENTS = [
  HeaderComponent,
  WrapperComponent,
  MainContainerComponent,
  CardHeaderComponent,
  CardContentComponent,
  CardFooterComponent,
  CardComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class LayoutModule {
}
