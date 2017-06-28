import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MdButtonModule, MdCheckboxModule, MdInputModule, MdProgressSpinnerModule, MdToolbarModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    MdInputModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
  ],
  declarations: []
})
export class MaterialModule { }
