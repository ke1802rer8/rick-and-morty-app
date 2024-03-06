import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';
import { CharacterHero, Results } from '../model/character-hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent implements OnInit {

  hero!: Results;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ){}

  ngOnInit(): void {
    this.getHero();
    console.warn(this.hero.id);

  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log("id:", id);
    this.heroService.getHero(id).subscribe((hero: Results) => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}
