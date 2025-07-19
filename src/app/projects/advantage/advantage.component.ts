import { Component, Input, inject, OnInit } from '@angular/core';

import { ProjectService } from '../../project.service';
import { Project } from '../../project';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.css'
})
export class AdvantageComponent {
  @Input() inputFromParent: number = -1;
  project: Project | undefined;
  projectService: ProjectService = inject(ProjectService);

  ngOnInit(): void {
    this.project = this.projectService.getProjectById(this.inputFromParent);
  }
}
