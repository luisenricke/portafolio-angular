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
          'Desarrollé funcionalidades de forma modular y robusta utilizando Kotlin y Java en los proyectos, garantizando un código de calidad y un buen rendimiento.',
          'Conceptualicé y diseñé interfaces de usuario utilizando XML, con un enfoque en Material Design para lograr interfaces atractivas y consistentes visualmente.',
          'Implementé el componente de navegación de Jetpack para facilitar la escalabilidad de posibles nuevas características en los proyectos, asegurando una estructura de navegación eficiente y adaptable.',
          'Utilicé Volley y Retrofit como herramientas para gestionar las peticiones y respuestas a los servicios web, asegurando una comunicación fluida y eficiente entre la aplicación y los servidores.',
          'Ayudé a solucionar errores de lógica en el código, así como a identificar y aplicar patrones de diseño y mejores prácticas durante el desarrollo de los proyectos, garantizando la calidad y la coherencia del código.',
        ],
        stack: ['AndroidSDK', 'SQLite', 'Material Design', 'Retrofit'],
      },
    },
    {
      slug: 'garage-istmenio',
      name: 'El Garage Istmeño',
      content: {
        job: 'Escritor',
        startAt: 'Septiembre 2018',
        endAt: 'Enero 2023',
        tasks: [
          'Desarrollo y diseño de la página web con Wix.',
          'Generador de contenido de temas de tecnología y desarrollo de software.',
          'Ayudante de la pre-producción de los videos del canal de YouTube.',
        ],
      },
    },
    {
      slug: 'salle-oaxaca',
      name: 'La Salle Oaxaca',
      content: {
        job: 'FullStack Developer',
        startAt: 'Noviembre 2020',
        endAt: null,
        tasks: [
          'Participé y colaboré en más del 70% de las reuniones con el equipo de desarrollo y stakeholders para recopilar y analizar los requisitos del proyecto, comprendiendo los casos de uso clave.',
          'Diseñé y desarrollé componentes, directivas y pipes reutilizables en Angular, lo que permitió optimizar la carga de renderización y compartir validaciones en más del 60% del proyecto, mejorando la eficiencia y la consistencia del código.',
          'Diseñé interfaces de usuario atractivas, usables y responsivas utilizando Reactive Forms, Angular Material y Bootstrap, siguiendo la metodología mobile first y priorizando la experiencia del usuario.',
          'Desarrollé y realicé pruebas en servicios web utilizando Grails, aprovechando la librería GORM para generar consultas SQL eficientes. Como resultado, más del 80% de los servicios fueron optimizados según los requerimientos, lo que contribuyó a una reducción del 20% en el consumo de recursos.',
          'Exploré diversas herramientas y configuraciones en los proyectos para mejorar la experiencia del desarrollo, incluyendo el uso de linters, analizadores de código (CodeNarc) y loggers, optimizando la calidad y la eficiencia del código.',
          'Generé reportes dinámicos utilizando Jasper Reports, proporcionando información valiosa y visualmente atractiva para los usuarios del sistema.',
          'Colaboré en la resolución de problemas y la toma de decisiones técnicas relacionadas con el proyecto, aportando mi experiencia y conocimientos para encontrar soluciones eficientes y efectivas.',
          'Participé en la revisión de código y en las pruebas de la aplicación, garantizando la calidad y el cumplimiento de los estándares establecidos.',
          'Colaboré en aproximadamente el 60% del diseño de la base de datos, aportando mis conocimientos en modelado y optimización de bases de datos para garantizar una estructura eficiente y escalable.',
        ],
        stack: ['Angular', 'Grails', 'PostgreSQL'],
      },
    },
  ];
  focused: number = this.workExperiences.length
    ? this.workExperiences.length - 1
    : 0;

  ngOnInit(): void {}
}
