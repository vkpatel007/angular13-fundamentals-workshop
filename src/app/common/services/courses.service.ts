import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL='http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses'
  constructor(private http: HttpClient){}
  all(){
    return this.http.get(this.getUrl())
  }

  find(id){
    return this.http.get(this.getURLWithID(id))
  }

  create(course){
    return this.http.post(this.getUrl(),course)
  }

  update(course){
    return this.http.put(this.getURLWithID(course.id),course)
  }

  delete(id){
    return this.http.delete(this.getURLWithID(id))
  }

  private getUrl(){
    return `${BASE_URL}/${this.model}`
  }

  private getURLWithID(id){
    return `${this.getUrl()}/${id}`
  }

  courses: Course[]=[
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'JavaScript the HARDEST PARTS EVER!',
      description: 'Learn the Javascript like a pro! with will',
      percentComplete: 59,
      favorite: true
    },
    {
      id: '3',
      title: 'hello world!',
      description: 'party hello world time',
      percentComplete: 89,
      favorite: false
    }
  ];


  // getCourses(): Course[] {
  //   return this.courses;
  // }
}
