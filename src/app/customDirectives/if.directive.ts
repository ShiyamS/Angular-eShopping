import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  // template - > here referes to which template the condition is applied to
  // ViewContainer - > here it creates <ng-template></ng-template>
  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }

}
