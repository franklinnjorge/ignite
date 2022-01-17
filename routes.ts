import CreateCourseService from './CreateCourseService'
import {Request, Response} from 'express'


export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "Node JS", 
    educator: "Dani",
    duration: 10
  })

  CreateCourseService.execute({
    name: "JAVASCRIPT",
    educator: "Joiklin"
  })

}



