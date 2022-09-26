import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionDirective } from './action.directive';

@NgModule({
  declarations: [ActionDirective],
  exports: [ActionDirective],
  imports: [CommonModule],
})
export class ActionModule {}
