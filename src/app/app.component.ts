import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_01_06_01_02_ChildAndChangeDetection';
  primitive: string = 'Initial Value';
  nonPrimitive: { key: string } = { key: 'Initial Key' };

  changePrimitive() {
    this.primitive = 'Changed Value'; // Reassign the primitive value
  }

  changeNonPrimitive() {
    this.nonPrimitive = { key: 'New Object' }; // Reassign the object
  }

  // OnPushComponent, the mutation will not trigger change detection because the object reference remains the same. To reflect the mutation, you would need to explicitly call markForCheck or trigger change detection manually.

  mutateNonPrimitive() {
    this.nonPrimitive.key = 'Mutated Key'; // Mutate the object
  }
}
