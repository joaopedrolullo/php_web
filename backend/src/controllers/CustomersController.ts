import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Customer from '../models/Customer';

export default {
  async index(request: Request, response: Response) {
    const customerRepository = getRepository(Customer);

    const customer = await customerRepository.find();

    return response.json(customer);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const customerRepository = getRepository(Customer);

    const customer = await customerRepository.findOneOrFail(id);

    return response.json(customer);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      date_birth,
      cpf,
      rg,
      phone,
    } = request.body;
  
    const customerRepository = getRepository(Customer);
    
    const customer = customerRepository.create({
      name,
      date_birth,
      cpf,
      rg,
      phone,
    });
  
    await customerRepository.save(customer);
  
    return response.status(201).json(customer);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const {
      name,
      date_birth,
      cpf,
      rg,
      phone,
    } = request.body;

    const customerRepository = getRepository(Customer);

    const customer = await customerRepository.update(id, {name, date_birth, cpf, rg, phone});

    return response.json(customer);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const customerRepository = getRepository(Customer);

    const customer = await customerRepository.delete(id);

    return response.json(customer);
  }
}