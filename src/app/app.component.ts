import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBdJa-en0s9Tz5KzT0n2NmUFiUmrCmHZYA",
      authDomain: "fastpdf-staging.firebaseapp.com",
    });
  }
}
