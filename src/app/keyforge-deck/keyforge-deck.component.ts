import { Component, OnInit, Input } from '@angular/core';
import { KeyforgeAnalyzerService } from '../keyforge-analyzer.service';
import { DeckData } from '../models/deck-data';
// import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-keyforge-deck',
  templateUrl: './keyforge-deck.component.html',
  styleUrls: ['./keyforge-deck.component.scss']
})
export class KeyforgeDeckComponent implements OnInit {

  @Input() id: string;

  @Input() deckData: DeckData;

  @Input() hasData: boolean = false;

  @Input() showCards: boolean = false;

  constructor(private keyforgeAnalyzerService: KeyforgeAnalyzerService) { }

  ngOnInit() {
    this.getDeck();
  }

  getDeck(): void {
    this.keyforgeAnalyzerService.getCardData(this.id)
      .subscribe(result => this.logTest(result));
  }

  logTest(response): void {
    this.deckData = response;
    console.log(response);
    this.hasData = true;
  }

  nameClick(): void{
    this.showCards = !this.showCards;
  }
}
