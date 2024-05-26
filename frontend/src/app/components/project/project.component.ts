import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project.model';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  open(project: Project): void {
    this.modalService.openProjectModal(project);
  }

  getImageUrl(project: Project): string {
    return project.image ? `http://127.0.0.1:8000/storage/images/${project.image}` : 'assets/images/default.avif';
  }
}
