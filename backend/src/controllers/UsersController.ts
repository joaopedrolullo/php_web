import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

export default {
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const user = await userRepository.find();

    return response.json(user);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return response.json(user);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      login,
      email,
      password,
    } = request.body;
  
    const userRepository = getRepository(User);
    
    const user = userRepository.create({
      name,
      login,
      email,
      password,
    });
  
    await userRepository.save(user);
  
    return response.status(201).json(user);
  }
}