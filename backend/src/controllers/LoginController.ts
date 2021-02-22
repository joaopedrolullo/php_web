import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

export default {
  async valida(request: Request, response: Response) {
    try {
      const {
        login,
        password,
      } = request.body;

      const authenticateUser = new AuthenticateUserService();
      
      const { user } = await authenticateUser.execute({
        login,
        password
      });

      return response.json({ user });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }    
  },
}