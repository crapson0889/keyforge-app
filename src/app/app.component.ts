import { Component, OnInit, Input } from '@angular/core';
import { DeckIds } from './deck-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyforge-app';

  @Input() decks: string[] = DeckIds;
}
