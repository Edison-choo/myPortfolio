import { Component, Input, inject } from '@angular/core';

import { ProjectService } from '../../project.service';
import { Project } from '../../project';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  @Input() inputFromParent: number = -1;
  project: Project | undefined;
  projectService: ProjectService = inject(ProjectService);

  ngOnInit(): void {
    this.project = this.projectService.getProjectById(this.inputFromParent);
  }
}
