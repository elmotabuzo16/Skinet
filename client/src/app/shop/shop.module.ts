import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule
  ],
  // this will be available inside app.module.ts
  exports: [ShopComponent]
})
export class ShopModule { }
