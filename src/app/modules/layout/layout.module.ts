import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AsideNavComponent,
    HeaderNavComponent,
    FooterComponent,
    DefaultComponent,
    UnwrapTagDirective
  ],
  exports: [
    AsideNavComponent,
    HeaderNavComponent,
    FooterComponent,
    DefaultComponent,
    UnwrapTagDirective
  ]
})
export class LayoutModule { }
