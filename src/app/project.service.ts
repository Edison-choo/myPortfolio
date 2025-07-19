import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projectList: Project[] = [
    {
      id: 1,
      name: 'My Portfolio',
      description: "This website is my first self coded portfolio website. While building this website, my main focus was to learn angular and website animation. It helped me to revise my coding knowledge during my nation service period",
      images: ['myportfolio.png','myportfolio.png'],
      advantages: ['Improved User Experience', 'Cool transition',"User friendly", "minimalistic"],
      skills: ['Javascript', 'Angular', 'CSS', 'animation']
    },
    {
      id: 2,
      name: 'EdiCoach',
      description: "This website is a career coaching website. My part of the website is to manage the user account, real time chat and the admin part of the website. We utilised AWS services to host the websites, every part of the services is supported with AWS including AI services.",
      images: ['edicoach.png','edicoach-login.png','edicoach-service.png'],
      advantages: ['Scalable', 'Efficient',"Cost Minimize",'User Friendly', 'Easy to navigate',"Durable"],
      skills: ['Javascript', 'React', 'CSS', 'AWS']
    },
    {
      id: 3,
      name: 'Foodecent',
      description: "FOODECENT is a website created using python flask module and jinja module for the backend development and shelve as the database. The project's aim is to help maintaining the crowd control during the covid-19 pandemic. User is able to use the website to perform tasks such as check the seating status of restaurants in Fraser mall, book tables and order food in advance.",
      images: ['foodecent1.png','foodecent2.png','foodecent3.png','foodecent4.png'],
      advantages: ['User friendly', 'Efficient',"Clean"],
      skills: ['Python', 'Javascript', 'CSS', 'Flask']
    },
    {
      id: 4,
      name: 'Foodecent 2.0',
      description: "FOODECENT 2.0 is a website created using Nodejs. Same as the FOODECENT project, it aims to help maintaining the crowd control during the covid-19 pandemic. Through the website, user is able to perform tasks such as check the seating status of restaurants in Fraser mall, book tables and order food in advance.",
      images: ['foodecent2.1.png','foodecent2.2.png','foodecent2.3.png','foodecent2.4.png','foodecent2.5.png'],
      advantages: ['Better UI', 'Efficient',"Easy to navigate","User friendly"],
      skills: ['Javascript', 'Nodejs', 'CSS']
    }
  ]

  getAllProjects(): Project[] {
    return this.projectList;
  }
  
  getProjectById(id: number): Project | undefined {
    return this.projectList.find(project => project.id === id);
  }

  // submitApplication(name: string, email: string, like: boolean) {
  //   console.log(`New contact: ${name} & ${email}`)
  // }
}
