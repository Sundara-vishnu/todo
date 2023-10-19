import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  notes = this.shared.shareddata;
  editIndex: number = -1;
  todo: Todo = {
    heading: '',
    description: '',
    date: '',
    time: '',
  };
  
  

  constructor(private shared:SharedService) {
    // Retrieve and parse the stored data from local storage
    const storedData = localStorage.getItem('todo');
    console.log(storedData)
    if (storedData) {
      this.todo = JSON.parse(storedData);
    }
  }

  ngOnInit() {
    this.todo  = {
      heading: this.todo.heading,
      description: '',
      date: '',
      time: '',
    };
  }

  saveTodo() {
    console.log(this.todo)
    this.shared.savedata(this.todo)
    this.todo = {
      heading: '',
      description: '',
      date: '',
      time: '',
    };
  
    
    console.log(this.shared.shareddata)
    const todoData = JSON.stringify(this.todo);
    localStorage.setItem('todo', todoData);
  }
  
  editNote(index: number) {
    this.editIndex = index;
    // Populate the form fields with the values of the note for editing
    this.todo = {
      heading: this.todo.heading,
      description: this.todo.description,
      date: this.todo.date,
      time: this.todo.time
    };
    this.todo = { ...this.notes[index] };
  }
}
