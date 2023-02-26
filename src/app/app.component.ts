import { Component } from '@angular/core';
import {defineComponents, IgcRatingComponent} from "igniteui-webcomponents";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_training';
}

defineComponents(IgcRatingComponent);
