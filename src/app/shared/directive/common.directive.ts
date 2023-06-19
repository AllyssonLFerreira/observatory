import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective {

  @Input() label?: string;
  @Input() message?: string;
  @Input() text?: string;
  @Input() icon?: string;
  @Input() isDisabled: boolean = false;
  
  
  /* 
  @Input() type: buttonTypeModel = 'basic';
  @Input() buttonEvent: buttonTypeEvent = 'submit';
  @Input() color: colorTypeModel = 'none';
  @Input() label?: string;
  */
}
