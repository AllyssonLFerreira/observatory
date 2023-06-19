import { Component, Input } from '@angular/core';
import { CommonDirective } from 'src/app/shared/directive/common.directive';
import { btnColorTypeModel, buttonTypeModel } from 'src/app/shared/shared-common.types';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent extends CommonDirective {
  
  @Input() type?: buttonTypeModel;
  @Input() colorBtn?: btnColorTypeModel;
   
  constructor() {
    super()
  }
}
