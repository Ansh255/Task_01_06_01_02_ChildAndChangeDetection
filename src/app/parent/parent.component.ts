import { 
  Component, 
  ViewChild, 
  AfterViewInit, 
  OnInit, 
  ContentChild, 
  AfterContentInit
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('viewChild', { static: true }) viewChild!: ChildComponent; // ViewChild for child added in template
  @ContentChild(ChildComponent, { static: true }) contentChild!: ChildComponent; // ContentChild for projected content

  ngOnInit() {
    console.log('ngOnInit - ViewChild:', this.viewChild?.childMessage);
    console.log('ngOnInit - ContentChild:', this.contentChild?.childMessage);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - ViewChild:', this.viewChild?.childMessage);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - ContentChild:', this.contentChild?.childMessage);
  }
}