import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../../services/hobby/hobby.service';
import { Hobby } from '../../models/hobby.model';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent implements OnInit {

  hobbies: any[] = [];

  constructor(private hobbyService: HobbyService) { }

  ngOnInit(): void {
    this.hobbyService.getHobbies().subscribe((data: Hobby[]) => {
      this.hobbies = data;
    });
  }
}
