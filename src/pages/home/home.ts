import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  people = [
    {
      gender: "female",
      name: {
        title: "ms",
        first: "micaela",
        last: "freitas"
      },
      location: {
        street: "3337 rua são josé ",
        city: "sertãozinho",
        state: "mato grosso",
        postcode: 29533
      },
      email: "micaela.freitas@example.com",
      login: {
        username: "bluegoose608",
        password: "highbury",
        salt: "61dpXvrC",
        md5: "eb597e3a5f62086d513516cf857d8032",
        sha1: "5aee5fa7a84c467500f496096a3b96aa9e719904",
        sha256: "c4a9f3494c63a29ab58fe3dc08d737f0c59ff7ab68584a2e8df8f1b69937a4ea"
      },
      dob: "1973-10-17 00:49:57",
      registered: "2008-03-01 15:27:52",
      phone: "(69) 0619-0626",
      cell: "(56) 0359-2302",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg"
      },
      nat: "BR"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "manuel",
        last: "garrido"
      },
      location: {
        street: "8336 avenida de castilla",
        city: "elche",
        state: "comunidad valenciana",
        postcode: 80757
      },
      email: "manuel.garrido@example.com",
      login: {
        username: "beautifuldog350",
        password: "corwin",
        salt: "z8v2xR9D",
        md5: "5f2c0e9499189efcb4172ac7f79ebf1c",
        sha1: "bf4cc363ee735c3f649e3706e5731bf2df42df4d",
        sha256: "e6dbe5dbe560354636a80802ecd08443bb7b3e91083a0a6e207b6ee8c80be580"
      },
      dob: "1975-10-28 05:30:04",
      registered: "2005-05-03 02:14:27",
      phone: "915-582-079",
      cell: "629-049-727",
      id: {
        name: "DNI",
        value: "01893843-M"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg"
      },
      nat: "ES"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "theo",
        last: "mackay"
      },
      location: {
        street: "6947 stanley way",
        city: "sidney",
        state: "alberta",
        postcode: 42573
      },
      email: "theo.mackay@example.com",
      login: {
        username: "purpleleopard946",
        password: "matty",
        salt: "eQCQwJyd",
        md5: "a96b2c8f3d7685122faf84560e80ff92",
        sha1: "e5376a657797fb015da0525829a4effd52f06e9e",
        sha256: "c6d3e62545b8295ad25fe49c56406b91eb6522bb86f5a8f8827cc8ee3919627e"
      },
      dob: "1961-05-21 06:37:55",
      registered: "2008-08-04 13:40:14",
      phone: "857-100-2413",
      cell: "929-992-9865",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg"
      },
      nat: "CA"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
