import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
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
    {
      slug: 'salle-oaxaca',
      name: 'La Salle Oaxaca',
      content: {
        job: 'Desarrollador FullStack(Angular & Grails)',
        startAt: 'Noviembre 2020',
        endAt: null,
        tasks: [
          'Participación en la planificación de sprints para para revisar requisitos y casos de uso respecto a la metodología SCRUM.',
          'Maquetación y desarrollo de distintas interfaces con la filosofía de mobile first.',
          'Uso de Reactive Forms para la manipulación y validación en los formularios.',
          'Desarrollo de distintos componentes reutilizables en Angular con el uso de Directivas, Pipes y Utilerías.',
          'Desarrollo y uso de Servicios Web con Angular, además, de uso de la librería de RxJS para realizar las peticiones respecto al requerimiento necesario.',
          'Desarrollo y testeo de API REST para diferentes módulos respecto a los requerimientos.',
          'Implementando funcionalidades para que la experiencia del desarrollo sea más ligera como el uso de linters, analizadores de código (CodeNarc), loggers, JWT.',
          'Apoyo al equipo para solventar dudas o ideas para optimizar las peticiones al servidor o mejorar la experiencia de usuario',
        ],
      },
    },
  ];
  focused: number = this.workExperiences.length
    ? this.workExperiences.length - 1
    : 0;

  ngOnInit(): void {}
}
