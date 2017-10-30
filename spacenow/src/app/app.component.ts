import { Component } from '@angular/core';

import { Collapse } from './collapse.animations';
import { Parallax } from './parallax.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ Parallax(300) ],
})
export class AppComponent {
  title = 'app';

}
