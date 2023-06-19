import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDirective } from './directive/common.directive';
import { SharedButtonComponent } from './components/atoms/shared-button/shared-button.component';
import { SharedInputComponent } from './components/atoms/shared-input/shared-input.component';
import { FormDirective } from './directive/form.directive';



@NgModule({
  declarations: [
    CommonDirective,
    SharedButtonComponent,
    SharedInputComponent,
    FormDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedButtonComponent,
    SharedInputComponent,
  ]
})
export class SharedModule { }
