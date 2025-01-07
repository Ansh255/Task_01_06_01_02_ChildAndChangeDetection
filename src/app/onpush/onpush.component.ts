import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushComponent {
  @Input() primitive!: string;
  @Input() nonPrimitive!: { key: string };
}
