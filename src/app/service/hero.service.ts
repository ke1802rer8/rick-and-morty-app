import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "@reactivex/rxjs";
import { CharacterHero, Results } from '../model/character-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(id: number): Observable<CharacterHero> {
    return this.http.get<CharacterHero>(`https://rickandmortyapi.com/api/character/?page=${id}`);
  }

  getHero(id: number): Observable<Results> {
    return this.http.get<Results>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
