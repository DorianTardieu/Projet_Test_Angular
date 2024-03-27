import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input()
    motparent1!: string;
  @Input()
    motparent2!: string;
  @Input()
  motparent3!: string;


  boutonActive = false;




}


