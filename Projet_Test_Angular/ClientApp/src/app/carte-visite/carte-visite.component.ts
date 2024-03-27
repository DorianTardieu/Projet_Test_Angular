import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {

  nom= '';
  prenom= '';
  age= '';
  description= '';
  

  onSubmit() {
    // Traiter les données saisies
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
