import { People } from '../../providers/people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shouldReorder = false;
  people$;
  constructor(
    public navCtrl: NavController,
    private peopleProvider: People
  ) {
    this.people$ = peopleProvider.getPeople();
  }
  toggleReorder() {
    this.shouldReorder = !this.shouldReorder;
  }
}
