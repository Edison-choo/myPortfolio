import { Component, Input, inject, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { Project } from '../project';
import { RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  projects: Project[] | undefined;
  projectService: ProjectService = inject(ProjectService);

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
  }
}
