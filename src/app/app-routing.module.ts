import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';



const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'notes', component: NotesComponent},
  { path: 'add-todo', component: AddTodoComponent},
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  // You can add more routes as needed.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }