import { Injectable } from '@angular/core';
import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
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
  constructor() { }

  // getCourses(): Course[] {
  //   return this.courses;
  // }
}
