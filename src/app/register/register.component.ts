import { Component, OnInit } from '@angular/core';
import ParticlesConfig from '../particles.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
  particlesConfig = ParticlesConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

}
