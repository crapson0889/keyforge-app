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

  @Input() deckData: DeckData; //  = { creatureCount: 1 };

  @Input() hasData: boolean = false;

  constructor(private keyforgeAnalyzerService: KeyforgeAnalyzerService) { }

  ngOnInit() {
    this.getDeck();
  }

  getDeck(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
    this.keyforgeAnalyzerService.getCardData()
      .subscribe(result => this.logTest(result)); // this.cardData = result); // console.log(result));
  }

  logTest(response): void {
    this.deckData = response;
    console.log(response);
    this.hasData = true;
  }
}
