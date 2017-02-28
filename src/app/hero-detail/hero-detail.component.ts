import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './../hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
	hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
