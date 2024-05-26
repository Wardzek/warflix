import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openProjectModal(project: Project): NgbModalRef {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.project = project;
    return modalRef;
  }

  closeModal(modalRef: NgbModalRef): void {
    modalRef.close();
  }
}
