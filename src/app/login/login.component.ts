import { Component, OnInit } from '@angular/core';
import ParticlesConfig from '../particles.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  particlesConfig = ParticlesConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

}
