import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {DOCUMENT, NgForOf, NgIf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterLink} from "@angular/router";
import {buttonSize} from "../animations";
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule,
    TranslateModule
  ],
  animations: [buttonSize],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  selected: string = "white";
  clicked = false;
  title = $localize`Settings`;
  @Output() dataUpdated = new EventEmitter<string>();
  @Input() type: 'clock' | 'timer' = "clock";
  items= [
    {label: $localize`dark`, value: "black"},
    {label:$localize`light`,value:"white"}
  ];

  constructor(@Inject(DOCUMENT) private document: Document, public apiService: ApiService, private translateService: TranslateService ) {}

  opposite(localized:boolean):string{
    if(localized)
      this.type === 'clock' ? $localize`timer` : $localize`clock`;
    return this.type === 'clock' ? 'timer' : 'clock';
  }

  get clickType(): 'small' | 'big' {
    return this.clicked ? 'small' : 'big';
  }

  get hide(): string{
    return this.clicked ? $localize`Hide` : $localize`Show`
  }

  optionChange(color: string){
    this.selected = color;
    document.body.className = color;
  }
  handleClick() {
    this.clicked = !this.clicked
    if(this.clicked)
      this.dataUpdated.emit('small');
    else
      this.dataUpdated.emit('big');
  }
}
