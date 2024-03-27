import { Component, OnInit,Input } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public mot = 'Bonjour';
  isHovering: boolean = true;

  motparent1 = "Bonjour";
  motparent2 = "mon";
  motparent3 = "ami";
  url = "";

  public images = [
    {
      defaultUrl: "https://www.b2cars.be/uploads/cars/images/30102/5db6216717859b68e27680ccd10aadb3.jpg",
      hoverUrl:"https://www.lyoncapitale.fr/wp-content/uploads/2020/08/OL-877x585.jpeg",
      isHovering:false
    },
    {
      defaultUrl: "https://www.b2cars.be/uploads/cars/images/30102/5db6216717859b68e27680ccd10aadb3.jpg",
      hoverUrl: "https://www.lyoncapitale.fr/wp-content/uploads/2020/08/OL-877x585.jpeg",
      isHovering: false
    },
    {
      defaultUrl: "https://www.b2cars.be/uploads/cars/images/30102/5db6216717859b68e27680ccd10aadb3.jpg",
      hoverUrl: "https://www.lyoncapitale.fr/wp-content/uploads/2020/08/OL-877x585.jpeg",
      isHovering: false
    }
  ]


  public onMouseOver(index: number) {
    this.images[index].isHovering = true;
  }

  public onMouseOut(index: number) {
    this.images[index].isHovering = false;
  }
  public incrementCounter() {
    this.currentCount++;

 
  }
}
