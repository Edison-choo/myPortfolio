import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../Intro/header/header.component';
import { AboutComponent } from '../Intro/about/about.component';
import { CertComponent } from '../Intro/cert/cert.component';
import { SkillComponent } from '../Intro/skill/skill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, AboutComponent, CertComponent, SkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
