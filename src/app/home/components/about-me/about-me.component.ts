import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  descriptionParagraph: string[] = [
    'Hola, mi nombre es Luis Enrique Villalobos Meléndez, desarrollador de' +
      'software con sede en Oaxaca de Juárez, Oax. No le tengo miedo a los nuevos' +
      'retos y disfruto mucho escribir código limpio.',
    'Desde el momento en que pude crear una calculadora en un programa de' +
      'consola supe a lo que me quería dedicar en mi vida. Me gustaría crecer' +
      'profesionalmente y poder colaborar activamente en proyectos de gran' +
      'impacto.',
    'Estas son algunas de las tecnologías, frameworks y/o herramientas con las' +
      'que he trabajado:',
  ];

  skills: string[] = [
    'Kotlin',
    'SQL',
    'Laravel',
    'Git',
    'Java',
    'PHP',
    'Spring',
  ];

  imgPath: string = './me.png'
}
