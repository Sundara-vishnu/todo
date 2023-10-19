import { Component, OnInit } from '@angular/core';
import { Todo } from '../add/todo.model';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  welcomeString = "No List is found";
  addNote: boolean = false;
  available="false";
  notes: Todo[] = [];
  filteredNotes: Todo[] = [];
  constructor(private shared: SharedService) {


  }

  ngOnInit(): void {
    this.notes = this.shared.shareddata;
    console.log(this.notes)
    if (this.notes.length!=0)
    {
      this.available="true";
    }
  }

    // Declare 'todo' as a property
  todo: Todo = {
    heading: '',
    description: '',
    date: '',
    time: '',
  };

  editIndex: number = -1; // Initially, no note is being edited

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

  // Add a saveEdit function to save the changes
  saveEdit() {
    if (this.editIndex !== -1) {
      // Update the note in the notes array
      this.notes[this.editIndex] = { ...this.todo };
      // Reset the form and exit edit mode
      this.editIndex = -1;
      this.todo = {
        heading: '',
        description: '',
        date: '',
        time: '',
      };
    }
  }

  deleteNote(index: number) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1); // Remove the note from the notes array
      console.log(this.notes)
      this.available="false"
      alert("Deleted the note!")
    }
  }

  searchText: string = '';

onSearch() {
    // Filter the notes based on the search text
    if (this.searchText) {
        this.filteredNotes = this.notes.filter((note) =>
            note.heading.toLowerCase().includes(this.searchText.toLowerCase()) ||
            note.description.toLowerCase().includes(this.searchText.toLowerCase())
        );
    } else {
        this.filteredNotes = this.notes; // If search text is empty, show all notes
    }
}

}


