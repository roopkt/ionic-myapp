import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  person = {
    gender: "female",
    name: {
      title: "ms",
      first: "elif",
      last: "tazegül"
    },
    location: {
      street: "9513 filistin cd",
      city: "bolu",
      state: "ardahan",
      postcode: 72479
    },
    email: "elif.tazegül@example.com",
    login: {
      username: "beautifulbear727",
      password: "steven",
      salt: "aqaLlEZD",
      md5: "b311c8f528e06852ab95c0e62b3da648",
      sha1: "a4d021a1809c1840694bb0407d9f4f71c73417c9",
      sha256: "45dde9ec5e73b7ea8f6cbd1ce955784e52e68b07dbf2ae0721deb91c46f96b1f"
    },
    dob: "1964-03-15 19:51:39",
    registered: "2004-12-22 00:29:23",
    phone: "(720)-302-8977",
    cell: "(663)-069-9393",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg"
    },
    nat: "TR"
  }
  constructor(public navCtrl: NavController) {

  }

}
