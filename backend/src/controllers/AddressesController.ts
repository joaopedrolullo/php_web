import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Address from '../models/Address';

export default {
  async index(request: Request, response: Response) {
    const addressRepository = getRepository(Address);

    const addresses = await addressRepository.find();

    return response.json(addresses);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const addressRepository = getRepository(Address);

    const addresses = await addressRepository.findOneOrFail(id);

    return response.json(addresses);
  },

  async create(request: Request, response: Response) {
    const {
      address,
      complement,
      city,
      state,
      country,
      zip_code
    } = request.body;
  
    const addressRepository = getRepository(Address);
    
    const data = {
      address,
      complement,
      city,
      state,
      country,
      zip_code
    }

    const addresses = addressRepository.create(data);
  
    await addressRepository.save(addresses);
  
    return response.status(201).json(addresses);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const {
      address,
      complement,
      city,
      state,
      country,
      zip_code
    } = request.body;

    const addressRepository = getRepository(Address);

    const addresses = await addressRepository.update(id, {address, complement, city, state, country, zip_code});

    return response.json(addresses);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const addressRepository = getRepository(Address);

    const addresses = await addressRepository.delete(id);

    return response.json(addresses);
  }
}