import { HomeComponent } from '../author/home/home.component';
import { AddComponent } from '../author/add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from '../edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];
export const routing = RouterModule.forRoot(routes);
