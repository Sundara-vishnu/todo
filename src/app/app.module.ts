import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { FormControl, FormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    NotesComponent,
    AddTodoComponent,
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
