import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    console.log(`PAYLOAD: ${request.body}`);
    const { name, email, login, type, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      login,
      type,
      password,
    });

    return response.json(user);
  }
}
