import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request{
  login: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticateUserService {
  public async execute({ login, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { login, password } });
    
    if (!user) {      
      throw new Error('Erro, usuário ou senha inválidos!');
    }

    return {
      user,
    };
  }
}

export default AuthenticateUserService;