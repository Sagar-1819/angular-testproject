import { TodoComponent } from './component/todo/todo.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CardsComponent } from './component/cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cards'
  },

  {
    path: 'cards',
    component: CardsComponent,

    children: [
      { path: 'gallery', component: GalleryComponent },
      { path: 'list', component: UserlistComponent  },
      { path: 'todo', component: TodoComponent },
    ]

  },
  { path: 'gallery', component: GalleryComponent },
  {
    path: 'list',
    component: UserlistComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
