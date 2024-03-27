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
      image: 'https://www.fredericvigier.com/wp-content/uploads/2018/01/photographe-photo-cv-etudiant.jpg'
    },
    {
      id: 2,
      name: 'Camille Lefevre',
      email: 'camille@example.com',
      phone: '06 34 56 78 90',
      skills: ['Python', 'Flask', 'SQLAlchemy'],
      image: 'https://media.licdn.com/dms/image/C4D03AQFxiqCy2pAaNw/profile-displayphoto-shrink_800_800/0/1636382758257?e=2147483647&v=beta&t=aexiA-aJOp130h9efFa-J80NEyb3C0kRAZBxtEQsaw4'
    },
    {
      id: 3,
      name: 'Théo Rousseau',
      email: 'theo@example.com',
      phone: '07 45 67 89 01',
      skills: ['Ruby on Rails', 'RSpec', 'PostgreSQL'],
      image: 'https://media.licdn.com/dms/image/C4E03AQF1BSXKF_DQwA/profile-displayphoto-shrink_800_800/0/1634910992501?e=2147483647&v=beta&t=ccAaW3QlmKoA-w7LOjkYK287g4Z-RgsWDFdnfyvF910'
    },
    {
      id: 4,
      name: 'Léa Moreau',
      email: 'lea@example.com',
      phone: '06 56 78 90 12',
      skills: ['Django', 'REST framework', 'Celery'],
      image: 'https://th.bing.com/th/id/OIP.eiuiQ3_r8dM43pei_5-2IgAAAA?w=177&h=180&c=7&r=0&o=5&pid=1.7'
    },
    {
      id: 5,
      name: 'Hugo Laurent',
      email: 'hugo@example.com',
      phone: '07 67 89 01 23',
      skills: ['React.js', 'Redux', 'TypeScript'],
      image: 'https://th.bing.com/th/id/OIP.IS4E2H45jHy7IDBQaMceUQHaHa?w=800&h=800&rs=1&pid=ImgDetMain'
    },
    {
      id: 6,
      name: 'Manon Petit',
      email: 'manon@example.com',
      phone: '06 78 90 12 34',
      skills: ['Java', 'Spring Boot', 'Hibernate'],
      image: 'https://th.bing.com/th/id/R.e2796d879f5c9bea689ea9e6e35b0de4?rik=jkWJTG8SXTQFKw&riu=http%3a%2f%2fdiffusionph.cccommunication.biz%2fjpgok%2fRepGR%2f223%2f223174_73.jpg&ehk=FknchrnHGzSIsUpYTEdzszI%2byutz0zk7aORu4TBXA%2bQ%3d&risl=&pid=ImgRaw&r=0'
    }
 

  ];
  selectedCv: Cv | null = null;

  showDetails(cv: Cv) {
    this.selectedCv = cv;

  }

}
