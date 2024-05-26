import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  projectForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.projectForm = this.fb.group({
      name: [''],
      image: [null],
      video: [''],
      description: [''],
      link: [''],
      techno: ['']
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.projectForm.get('name')?.value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    formData.append('video', this.projectForm.get('video')?.value);
    formData.append('description', this.projectForm.get('description')?.value);
    formData.append('link', this.projectForm.get('link')?.value);
    formData.append('techno', this.projectForm.get('techno')?.value);

    this.projectService.createProject(formData).subscribe(
      response => {
        alert('Project created successfully');
        console.log('Project created successfully', response);
        // Reload or update the projects list if needed
      },
      error => {
        alert('There was an error!');
        console.error('There was an error!', error);
      }
    );
  }
}
