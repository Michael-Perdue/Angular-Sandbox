import {Component, Inject} from '@angular/core';
import {DOCUMENT, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  selected: string = "white";
  clicked = false;
  title = 'untitled1';
  items= [
    {label: 'dark', value: "black"},
    {label:'light',value:"white"}
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  optionChange(color: string){
    this.selected = color;
    document.body.className = color;
  }
  handleClick() {
    alert('Button clicked!');
    this.clicked = !this.clicked
  }
}
