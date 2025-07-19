import { Component, Input, inject, OnInit } from '@angular/core';

import { ProjectService } from '../../project.service';
import { Project } from '../../project';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() inputFromParent: number = -1;
  project: Project | undefined;
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    // this.project = this.projectService.getProjectById(this.inputFromParent);
  }

  ngOnInit(): void {
    this.project = this.projectService.getProjectById(this.inputFromParent);
  }
}
