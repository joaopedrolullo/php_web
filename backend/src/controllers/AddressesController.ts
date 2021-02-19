import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Address from '../models/Address';
import addressView from '../views/addresses_view';
import * as Yup from 'yup';

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

    return response.json(addressView.render(addresses));
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

    const schema = Yup.object().shape({
      address: Yup.string().required('Endereço obrigatório'),
      city: Yup.string().required('Cidade obrigatória'),
      state: Yup.string().required('Estado obrigatório'),
      country: Yup.string().required('País obrigatório'),
      zip_code: Yup.string().required('Código Postal obrigatório'),
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const addresses = addressRepository.create(data);
  
    await addressRepository.save(addresses);
  
    return response.status(201).json(addresses);
  }
}