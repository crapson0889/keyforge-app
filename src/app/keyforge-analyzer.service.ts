import { Injectable } from '@angular/core';
import { DeckData } from './models/deck-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With"',
    'Access-Control-Allow-Methods': ['GET', 'POST', 'PUT', 'DELETE'] })
};

@Injectable({
  providedIn: 'root'
})
export class KeyforgeAnalyzerService {

  private keyforgeUrl = 'https://localhost:5001/api/card/';

  constructor(private http: HttpClient) { }

  getCardData(): Observable<DeckData>  {
    return this.http.get<DeckData>(this.keyforgeUrl, options);
  }
}
