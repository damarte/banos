import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdProgressSpinnerModule, MdToolbarModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdMenuModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdMenuModule,
  ],
  declarations: []
})
export class MaterialModule { }
