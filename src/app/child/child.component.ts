import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  
})
export class ChildComponent {
  childMessage: string = 'Hello from Child Component!';
}
