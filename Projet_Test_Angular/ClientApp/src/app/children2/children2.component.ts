import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  boutonActive!: boolean;

  toggleBouton(): void {
    this.boutonActive = !this.boutonActive;
  }
}
