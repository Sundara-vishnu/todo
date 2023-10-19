import { Injectable } from '@angular/core';
import { Todo } from './components/add/todo.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  shareddata:Todo[]=[]
  constructor() { }

  savedata(data:Todo){
    this.shareddata.push(data)
  }
  getdata(){
    return this.shareddata;
  }
}
