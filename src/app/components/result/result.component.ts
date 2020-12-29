import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  heroesResult: Heroe[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) {

  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.termino = params['str'];
      this.heroesResult = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroesResult);
    });

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
