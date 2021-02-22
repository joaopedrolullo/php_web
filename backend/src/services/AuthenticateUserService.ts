import { getRepository } from 'typeorm';

import UserLogin from '../models/UserLogin';

interface Request{
  login: string;
  password: string;
}

interface Response {
  user: UserLogin;
}

class AuthenticateUserService {
  public async execute({ login, password }: Request): Promise<Response> {
    const usersRepository = getRepository(UserLogin);

    const user = await usersRepository.findOne({ where: { login } });

    if (!user) {
      throw new Error('Erro');
    }

    return {
      user,
    };
  }
}

export default AuthenticateUserService;