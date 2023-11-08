import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';
const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete:0,
  favorite: false
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //1. render courses in a list
  //2. select a course
  //3. render selected course
  
  courses= [];
  selectedCourse=emptyCourse
  originalTitle =''

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses=this.coursesService.courses
  }
  selectCourse(course){
    this.selectedCourse={...course}
    this.originalTitle= course.title
  }

  saveCourse(course){
    console.log('Save Course', course)
  }

  deleteCourse(id){
    console.log('delete course', id)
  }

  reset(){
    this.selectCourse({...emptyCourse})
  }
}
