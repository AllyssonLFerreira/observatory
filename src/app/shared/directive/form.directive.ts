import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedFormModel } from 'src/app/core/interface/forms.interface';
import { CommonDirective } from 'src/app/shared/directive/common.directive';
import { inputTypesModel } from '../shared-common.types';

@Directive({
  selector: '[appForm]'
})
export class FormDirective extends CommonDirective {

  @Output() outputValue = new EventEmitter<any | SharedFormModel>()
  @Input() parentForm: FormControl | undefined;
  @Input() placeholder: string = '';
  @Input() mask: string = '';
  @Input() type: string = 'text';
}
