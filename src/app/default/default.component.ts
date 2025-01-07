import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  @Input() primitive!: string;
  @Input() nonPrimitive!: { key: string };
}
