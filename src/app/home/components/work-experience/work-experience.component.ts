import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  focused: number = 0;

  get workExperienceFocus(): any {
    return this.workExperiences.at(this.focused);
  }

  workExperiences: any[] = [
    {
      slug: 'bitzero',
      name: 'BitZero',
      content: {
        job: 'Desarrollador Android',
        startAt: 'Abril 2019',
        endAt: 'Febrero 2020',
        tasks: [
          'Desarrollo de funcionalidades en los proyectos de una forma modular y robusta con Kotlin y Java',
          'Conceptualizando y diseñando las interfaces de usuario con XML tendencia a Material Design',
          'Encargado de implementar la persistencia de datos de las aplicaciones con SharedPreference y Room (SQLite)',
          'Implementación del componente de navegación de Jetpack para facilitar la escalabilidad de posibles nuevas características en los proyectos',
          'Implementación de Volley y Retorfit como herramientas para gestionar las peticiones y respuestas a los servicios web',
          'Ayudando a solucionar errores de lógica en el código, patrones de diseño y otras implementaciones durante el desarrollo de los proyectos',
        ],
        stack: ['Angular', 'Grails', 'PostgreSQL'],
      },
    },
    {
      slug: 'garage-istmenio',
      name: 'El Garage Istmeño',
      content: {
        job: 'Escritor',
        startAt: 'Septiembre 2018',
        endAt: null,
        tasks: [
          'Desarrollo y diseño de la página web con Wix',
          'Generador de contenido de temas de tecnología y desarrollo de software',
          'Ayudante de la pre-producción de los videos del canal de YouTube',
        ],
      },
    },
  ];

  ngOnInit(): void {}
}
