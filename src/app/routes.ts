import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectComponent } from './project/project.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact Us page'
    },
    {
      path: 'gallery',
      component: GalleryComponent,
      title: 'Gallery page'
    },
    {
      path: 'project/:id',
      component: ProjectComponent,
      title: 'Project page'
    },
    // {
    //   path: 'details/:id',
      // component: DetailsComponent,
    //   title: 'Home details'
    // }
  ];
  
  export default routeConfig;