import { Component, OnInit } from '@angular/core';
import { Cv } from './cv.model';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cvs: Cv[] = [
 {
      id: 1,
      name: 'Lucas Dubois',
      email: 'lucas@example.com',
      phone: '07 23 45 67 89',
      skills: ['Symfony', 'Doctrine', 'Twig'],
      image: 'https://example.com/lucas_profile.jpg'
    },
    {
      id: 2,
      name: 'Camille Lefevre',
      email: 'camille@example.com',
      phone: '06 34 56 78 90',
      skills: ['Python', 'Flask', 'SQLAlchemy'],
      image: 'https://example.com/camille_profile.jpg'
    },
    {
      id: 3,
      name: 'Théo Rousseau',
      email: 'theo@example.com',
      phone: '07 45 67 89 01',
      skills: ['Ruby on Rails', 'RSpec', 'PostgreSQL'],
      image: 'https://example.com/theo_profile.jpg'
    },
    {
      id: 4,
      name: 'Léa Moreau',
      email: 'lea@example.com',
      phone: '06 56 78 90 12',
      skills: ['Django', 'REST framework', 'Celery'],
      image: 'https://example.com/lea_profile.jpg'
    },
    {
      id: 5,
      name: 'Hugo Laurent',
      email: 'hugo@example.com',
      phone: '07 67 89 01 23',
      skills: ['React.js', 'Redux', 'TypeScript'],
      image: 'https://example.com/hugo_profile.jpg'
    },
    {
      id: 6,
      name: 'Manon Petit',
      email: 'manon@example.com',
      phone: '06 78 90 12 34',
      skills: ['Java', 'Spring Boot', 'Hibernate'],
      image: 'https://example.com/manon_profile.jpg'
    },
    {
      id: 7,
      name: 'Maxime Girard',
      email: 'maxime@example.com',
      phone: '07 89 01 23 45',
      skills: ['Angular', 'RxJS', 'NgRx'],
      image: 'https://example.com/maxime_profile.jpg'
    }
 

  ];
  selectedCv: Cv | null = null;

  showDetails(cv: Cv) {
    this.selectedCv = cv;

  }

}
