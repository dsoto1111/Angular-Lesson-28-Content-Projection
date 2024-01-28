import { Component, ContentChild } from '@angular/core';
import { TempRefDirective } from '../temp-ref.directive'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    showIt: boolean = false;

    @ContentChild(TempRefDirective) content!: TempRefDirective;
}
