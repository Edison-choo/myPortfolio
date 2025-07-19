import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AdvantageComponent } from '../projects/advantage/advantage.component';
import { DetailComponent } from '../projects/detail/detail.component';
import { ShowcaseComponent } from '../projects/showcase/showcase.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AdvantageComponent, DetailComponent, ShowcaseComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  contactId = 1;

  constructor() {
    this.contactId = Number(this.route.snapshot.params["id"]);
  }
}
