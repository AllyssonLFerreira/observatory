import { Component } from '@angular/core';
import { FormDirective } from '../../../directive/form.directive';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent extends FormDirective {

  constructor() {
    super()
  }

}
