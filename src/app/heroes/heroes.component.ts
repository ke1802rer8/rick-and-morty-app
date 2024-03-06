import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharacterHero, Results } from '../model/character-hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  public allHeroes: Results[] = [];
  public copiedListOfHeroes: Results[] = [];
  public pageSlice: Results[] = [];
  public value = "";

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getAllListHeroes();
    this.copiedListOfHeroes = this.allHeroes;
  }

  OnPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.allHeroes.length) {
      endIndex = this.allHeroes.length;
    }

    this.pageSlice = this.allHeroes.slice(startIndex, endIndex);
  }

  getAllListHeroes(): void {
    this.heroService.getHeroes(0).subscribe((resp: CharacterHero) => {
        this.pageSlice = resp.results;
    });

    for (let i = 0; i < 20; i++) {
      this.heroService.getHeroes(i).subscribe((resp: CharacterHero) => {
        for (let i = 0; i < 20; i++) {
          this.allHeroes.push(resp.results[i]);
        }
      });
    }
  }

  searchHeroes(event: string): void {
    this.allHeroes = this.copiedListOfHeroes.filter(result => result.name.toLowerCase().includes(event.toLowerCase()));
    this.pageSlice = this.allHeroes.slice(0, 20);
  }

  clearChanges(): void {
    this.value = '';
    this.allHeroes = this.copiedListOfHeroes;
    this.pageSlice = this.allHeroes.slice(0, 20);
  }
}
