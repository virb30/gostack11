import {Request, Response} from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser({name: 'Vinícius', email: 'vinicius@teste.com.br', password: '123456'});

  return response.json({ message: 'Hello World'});
}