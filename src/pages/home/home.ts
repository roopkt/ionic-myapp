import { People } from '../../providers/people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shouldReorder = false;
  people = [];
  constructor(
    public navCtrl: NavController,
    private service: People
  ) {
    service.getPeople().subscribe(
      data => this.people = data
    );
  }

  toggleReorder() {
    this.shouldReorder = !this.shouldReorder;
  }

  doRefresh(e) {
    this.service.getPeople()
      .subscribe(
      data => this.people.unshift(...data),
      err => console.log(err),
      () => e.complete()
      );
  }
}
