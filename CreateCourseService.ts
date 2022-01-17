import {Request, Response} from 'express'

interface Course {
  name: string,
  duration?: number,
  educator: string
}

class CreateCourseService{

  execute({name, duration = 9, educator}: Course  ){
    console.log(name, duration, educator)
  }
}


export default new CreateCourseService()